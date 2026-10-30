-- =========================================================
-- ANALIT ECOSYSTEM
-- Schema principal
-- =========================================================


-- =========================================================
-- LIMPEZA DAS TABELAS DO ANALIT
--
-- Não toca em nenhuma tabela do Neon Auth.
-- =========================================================

drop table if exists public.access_events cascade;
drop table if exists public.app_sessions cascade;
drop table if exists public.user_app_permissions cascade;
drop table if exists public.user_profiles cascade;
drop table if exists public.apps cascade;


-- =========================================================
-- PERFIS COMPLEMENTARES
--
-- Login, email, senha e sessão pertencem ao Neon Auth.
-- Aqui armazenamos somente dados extras do usuário.
-- =========================================================

create table public.user_profiles (
  auth_user_id uuid primary key
    references neon_auth."user"(id)
    on delete cascade,

  full_name text,

  institution text,

  profile_type text not null default 'user'
    check (
      profile_type in (
        'user',
        'student',
        'professor',
        'researcher',
        'technician',
        'admin'
      )
    ),

  created_at timestamptz not null default now(),

  updated_at timestamptz not null default now()
);


-- =========================================================
-- APLICATIVOS DO ECOSSISTEMA
-- =========================================================

create table public.apps (
  id uuid primary key default gen_random_uuid(),

  slug text unique not null,

  name text not null,

  description text,

  url text,

  status text not null default 'development'
    check (
      status in (
        'active',
        'development',
        'disabled'
      )
    ),

  created_at timestamptz not null default now(),

  updated_at timestamptz not null default now()
);


-- =========================================================
-- PERMISSÕES DE ACESSO
-- =========================================================

create table public.user_app_permissions (
  id uuid primary key default gen_random_uuid(),

  auth_user_id uuid not null
    references neon_auth."user"(id)
    on delete cascade,

  app_id uuid not null
    references public.apps(id)
    on delete cascade,

  access_role text not null default 'user',

  status text not null default 'active'
    check (
      status in (
        'active',
        'blocked',
        'pending'
      )
    ),

  created_at timestamptz not null default now(),

  unique (
    auth_user_id,
    app_id
  )
);


-- =========================================================
-- SESSÕES DE USO DOS APLICATIVOS
--
-- Não substitui a sessão de autenticação.
-- Serve para medir o uso de cada plataforma.
-- =========================================================

create table public.app_sessions (
  id uuid primary key default gen_random_uuid(),

  auth_user_id uuid not null
    references neon_auth."user"(id)
    on delete cascade,

  app_id uuid not null
    references public.apps(id)
    on delete cascade,

  started_at timestamptz not null default now(),

  last_activity_at timestamptz not null default now(),

  ended_at timestamptz
);


-- =========================================================
-- EVENTOS DE ACESSO E USO
-- =========================================================

create table public.access_events (
  id bigint generated always as identity primary key,

  auth_user_id uuid
    references neon_auth."user"(id)
    on delete set null,

  app_id uuid
    references public.apps(id)
    on delete set null,

  session_id uuid
    references public.app_sessions(id)
    on delete set null,

  event_type text not null,

  module text,

  system_name text,

  page text,

  metadata jsonb not null default '{}'::jsonb,

  created_at timestamptz not null default now()
);


-- =========================================================
-- ÍNDICES
-- =========================================================

create index idx_access_events_user
on public.access_events (
  auth_user_id
);


create index idx_access_events_app
on public.access_events (
  app_id
);


create index idx_access_events_created_at
on public.access_events (
  created_at desc
);


create index idx_app_sessions_user
on public.app_sessions (
  auth_user_id
);


create index idx_app_sessions_app
on public.app_sessions (
  app_id
);


create index idx_permissions_user
on public.user_app_permissions (
  auth_user_id
);


-- =========================================================
-- APLICATIVOS INICIAIS
-- =========================================================

insert into public.apps (
  slug,
  name,
  description,
  status
)
values
(
  'analitcalc',
  'AnalitCalc',
  'Plataforma para estudo, simulação e análise de volumetrias clássicas.',
  'active'
),
(
  'analito',
  'Analito',
  'Plataforma inteligente voltada ao ensino e suporte à Química Analítica.',
  'development'
),
(
  'marsyn',
  'MARSYN',
  'Plataforma voltada à espectrometria de massas e identificação analítica.',
  'development'
);