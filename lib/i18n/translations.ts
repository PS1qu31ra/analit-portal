export type Language =
  | "pt-BR"
  | "en";


export const translations = {
  "pt-BR": {
    language: {
      portuguese: "Português",
      english: "English",
      change: "Alterar idioma",
    },

    common: {
      login: "Entrar",
      createAccount: "Criar conta",
      back: "Voltar",
      continue: "Continuar",
      available: "Disponível",
      development: "Em desenvolvimento",
      comingSoon: "Disponível em breve",
      select: "Selecione...",
      optional: "Opcional",
or: "ou",
scientificEcosystem: "Ecossistema científico",
    },

    home: {
      navPlatforms: "Plataformas",
      navEcosystem: "Ecossistema",
      navHow: "Como funciona",

      heroBadge:
        "Analit Ecosystem",

      heroTitle1:
        "Um único acesso.",

      heroTitle2:
        "Um ecossistema inteiro",

      heroTitle3:
        "de ferramentas científicas.",

      heroDescription:
        "Acesse plataformas voltadas ao ensino, à pesquisa e à análise científica a partir de uma única conta.",

      createMyAccount:
        "Criar minha conta",

      alreadyAccount:
        "Já tenho uma conta",

      identity:
        "identidade",

      platforms:
        "plataformas",

      environment:
        "ambiente central",

      platformEyebrow:
        "Plataformas",

      platformTitle:
        "Ferramentas que evoluem junto com o ecossistema.",

      platformDescription:
        "Cada plataforma possui uma finalidade específica, mas compartilha a mesma identidade, conta e estrutura de acesso.",

      accessPortal:
        "Acessar pelo portal",

      ecosystemEyebrow:
        "Ecossistema Analit",

      ecosystemTitle:
        "Sua identidade acompanha você entre as plataformas.",

      ecosystemDescription:
        "O Analit Portal funciona como o ponto central do ecossistema. Sua conta, perfil e permissões permanecem centralizados enquanto você utiliza diferentes ferramentas.",

      identityTitle:
        "Identidade centralizada",

      identityDescription:
        "Uma única conta para acessar as plataformas disponíveis.",

      profileTitle:
        "Perfil integrado",

      profileDescription:
        "Informações acadêmicas e profissionais vinculadas ao usuário.",

      experienceTitle:
        "Experiência contínua",

      experienceDescription:
        "Acesse novas ferramentas sem precisar criar novas contas.",

      howEyebrow:
        "Como funciona",

      howTitle:
        "Do cadastro à plataforma em três etapas.",

      step1:
        "Crie sua conta",

      step1Description:
        "Informe seus dados de acesso e complete seu perfil acadêmico ou profissional.",

      step2:
        "Entre no portal",

      step2Description:
        "Visualize todas as plataformas disponíveis para sua conta em um único painel.",

      step3:
        "Acesse suas ferramentas",

      step3Description:
        "Escolha a plataforma desejada e continue sua atividade dentro do ecossistema.",

      ctaTitle:
        "Seu acesso ao ecossistema começa aqui.",

      ctaDescription:
        "Crie sua conta e tenha um único ambiente para acessar as plataformas Analit.",

      footer:
        "Ensino, pesquisa e tecnologia científica em um único ecossistema.",

      previewTitle:
        "Seu ambiente científico",

      previewOverview:
        "VISÃO GERAL",

      previewPlatforms:
        "Suas plataformas",

      previewDescription:
        "Tudo o que você utiliza dentro do ecossistema em um único lugar.",

      integrated:
        "Ecossistema integrado",
    },

    login: {
      access:
        "Acesso",

      title:
        "Entre na sua conta",

      description:
        "Utilize seu e-mail e senha para acessar o Analit Portal.",

      email:
        "E-mail",

      emailPlaceholder:
        "nome@instituicao.com",

      password:
        "Senha",

      passwordPlaceholder:
        "Digite sua senha",

      forgot:
        "Esqueci minha senha",

      remember:
        "Manter minha sessão ativa",

      enter:
        "Entrar no portal",

      noAccount:
        "Ainda não possui uma conta?",

      createFree:
        "Criar conta gratuitamente",

      back:
        "Voltar ao portal",

      show:
        "Mostrar",

      hide:
        "Ocultar",

      visualTitle:
        "Seu ecossistema científico começa em uma única conta.",

      visualDescription:
        "Acesse suas plataformas, mantenha seu perfil centralizado e continue suas atividades em diferentes ferramentas do ecossistema Analit.",

      visualFooter:
        "Um único acesso para todas as plataformas do ecossistema.",

      invalidEmail:
        "Informe um endereço de e-mail válido.",

      passwordRequired:
        "Informe sua senha.",

        temporaryMessage:
        "A interface está pronta. A autenticação será ativada na integração com o Neon Auth.",
      
      securityNote:
        "Suas credenciais serão processadas pelo sistema de autenticação do Analit e não serão armazenadas manualmente pelas plataformas individuais.",
      },

    signup: {
      registration:
        "Cadastro de usuário",

      ecosystemTitle:
        "Uma conta para todo o ecossistema Analit.",

      ecosystemDescription:
        "Centralize seu acesso às plataformas científicas e mantenha sua experiência integrada entre as ferramentas.",

      account:
        "Conta",

      accountDescription:
        "Identificação e acesso",

      profile:
        "Perfil",

      profileDescription:
        "Contexto acadêmico e profissional",

      step:
        "Etapa",

      of:
        "de",

      createTitle:
        "Crie sua conta",

      createDescription:
        "Informe seus dados de identificação e defina suas credenciais de acesso.",

      completeTitle:
        "Complete seu perfil",

      completeDescription:
        "Estas informações nos ajudam a compreender o perfil de uso das plataformas e aprimorar o ecossistema Analit.",

      identification:
        "Identificação",

      accountData:
        "Dados da conta",

      fullName:
        "Nome completo",

      fullNamePlaceholder:
        "Informe seu nome completo",

      email:
        "E-mail",

      emailPlaceholder:
        "nome@instituicao.com",

      password:
        "Senha",

      passwordPlaceholder:
        "Mínimo de 8 caracteres",

      confirmPassword:
        "Confirmar senha",

      repeatPassword:
        "Repita sua senha",

      show:
        "Mostrar",

      hide:
        "Ocultar",

      nextStep:
        "Próxima etapa",

      nextDescription:
        "Em seguida, serão solicitadas informações acadêmicas ou profissionais para completar seu perfil.",

      institutional:
        "Perfil institucional",

      information:
        "Informações de formação e atuação",

      institution:
        "Instituição de vínculo",

      institutionPlaceholder:
        "Ex.: Universidade Federal de Minas Gerais",

      profileType:
        "Perfil de atuação",

      specifyProfile:
        "Especifique seu perfil",

      area:
        "Área de formação ou atuação",

      specifyArea:
        "Especifique sua área",

      primaryGoal:
        "Finalidade principal de uso",

      country:
        "País",

      state:
        "Estado",

      specifyCountry:
        "Informe o país",

      discovery:
        "Como conheceu a plataforma?",

      specify:
        "Especifique",

      preferNot:
        "Prefiro não informar",

      complete:
        "Concluir cadastro",

      validated:
        "Formulário validado",

      ready:
        "Perfil pronto para cadastro",

      readyDescription:
        "Todas as informações foram validadas corretamente. A criação definitiva da conta será ativada quando conectarmos a autenticação ao Neon.",

        review:
        "Revisar informações",
      
      dataUse:
        "As informações solicitadas serão utilizadas para personalização, análise agregada de uso e aprimoramento das plataformas.",
    },
  },


  en: {
    language: {
      portuguese: "Português",
      english: "English",
      change: "Change language",
    },

    common: {
      login: "Sign in",
      createAccount: "Create account",
      back: "Back",
      continue: "Continue",
      available: "Available",
      development: "In development",
      comingSoon: "Coming soon",
      select: "Select...",
      optional: "Optional",
or: "or",
scientificEcosystem: "Scientific ecosystem",
    },

    home: {
      navPlatforms: "Platforms",
      navEcosystem: "Ecosystem",
      navHow: "How it works",

      heroBadge:
        "Analit Ecosystem",

      heroTitle1:
        "One account.",

      heroTitle2:
        "An entire ecosystem",

      heroTitle3:
        "of scientific tools.",

      heroDescription:
        "Access platforms designed for education, research and scientific analysis through a single account.",

      createMyAccount:
        "Create my account",

      alreadyAccount:
        "I already have an account",

      identity:
        "identity",

      platforms:
        "platforms",

      environment:
        "central environment",

      platformEyebrow:
        "Platforms",

      platformTitle:
        "Tools that evolve together with the ecosystem.",

      platformDescription:
        "Each platform serves a specific purpose while sharing the same identity, account and access structure.",

      accessPortal:
        "Access through portal",

      ecosystemEyebrow:
        "Analit Ecosystem",

      ecosystemTitle:
        "Your identity follows you across platforms.",

      ecosystemDescription:
        "Analit Portal is the central hub of the ecosystem. Your account, profile and permissions remain centralized while you use different tools.",

      identityTitle:
        "Centralized identity",

      identityDescription:
        "One account to access all available platforms.",

      profileTitle:
        "Integrated profile",

      profileDescription:
        "Academic and professional information linked to your account.",

      experienceTitle:
        "Continuous experience",

      experienceDescription:
        "Access new tools without creating additional accounts.",

      howEyebrow:
        "How it works",

      howTitle:
        "From registration to your platform in three steps.",

      step1:
        "Create your account",

      step1Description:
        "Set up your access credentials and complete your academic or professional profile.",

      step2:
        "Enter the portal",

      step2Description:
        "View all platforms available to your account from a single dashboard.",

      step3:
        "Access your tools",

      step3Description:
        "Choose a platform and continue your activities within the ecosystem.",

      ctaTitle:
        "Your access to the ecosystem starts here.",

      ctaDescription:
        "Create your account and use one environment to access Analit platforms.",

      footer:
        "Education, research and scientific technology in one ecosystem.",

      previewTitle:
        "Your scientific environment",

      previewOverview:
        "OVERVIEW",

      previewPlatforms:
        "Your platforms",

      previewDescription:
        "Everything you use across the ecosystem in one place.",

      integrated:
        "Integrated ecosystem",
    },

    login: {
      access:
        "Access",

      title:
        "Sign in to your account",

      description:
        "Use your email and password to access Analit Portal.",

      email:
        "Email",

      emailPlaceholder:
        "name@institution.com",

      password:
        "Password",

      passwordPlaceholder:
        "Enter your password",

      forgot:
        "Forgot password?",

      remember:
        "Keep me signed in",

      enter:
        "Enter portal",

      noAccount:
        "Don't have an account yet?",

      createFree:
        "Create a free account",

      back:
        "Back to portal",

      show:
        "Show",

      hide:
        "Hide",

      visualTitle:
        "Your scientific ecosystem starts with one account.",

      visualDescription:
        "Access your platforms, keep your profile centralized and continue your activities across the Analit ecosystem.",

      visualFooter:
        "One account for every platform in the ecosystem.",

      invalidEmail:
        "Enter a valid email address.",

      passwordRequired:
        "Enter your password.",

        temporaryMessage:
        "The interface is ready. Authentication will be enabled when Neon Auth is integrated.",
      
      securityNote:
        "Your credentials will be processed by the Analit authentication system and will not be manually stored by individual platforms.",
      },

    signup: {
      registration:
        "User registration",

      ecosystemTitle:
        "One account for the entire Analit ecosystem.",

      ecosystemDescription:
        "Centralize access to scientific platforms and maintain an integrated experience across tools.",

      account:
        "Account",

      accountDescription:
        "Identity and access",

      profile:
        "Profile",

      profileDescription:
        "Academic and professional context",

      step:
        "Step",

      of:
        "of",

      createTitle:
        "Create your account",

      createDescription:
        "Enter your identification details and define your access credentials.",

      completeTitle:
        "Complete your profile",

      completeDescription:
        "This information helps us understand platform usage and improve the Analit ecosystem.",

      identification:
        "Identification",

      accountData:
        "Account details",

      fullName:
        "Full name",

      fullNamePlaceholder:
        "Enter your full name",

      email:
        "Email",

      emailPlaceholder:
        "name@institution.com",

      password:
        "Password",

      passwordPlaceholder:
        "At least 8 characters",

      confirmPassword:
        "Confirm password",

      repeatPassword:
        "Repeat your password",

      show:
        "Show",

      hide:
        "Hide",

      nextStep:
        "Next step",

      nextDescription:
        "Next, we will ask for academic or professional information to complete your profile.",

      institutional:
        "Institutional profile",

      information:
        "Education and professional information",

      institution:
        "Affiliated institution",

      institutionPlaceholder:
        "Example: Federal University of Minas Gerais",

      profileType:
        "Professional profile",

      specifyProfile:
        "Specify your profile",

      area:
        "Field of study or work",

      specifyArea:
        "Specify your field",

      primaryGoal:
        "Primary purpose of use",

      country:
        "Country",

      state:
        "State",

      specifyCountry:
        "Enter your country",

      discovery:
        "How did you hear about the platform?",

      specify:
        "Specify",

      preferNot:
        "Prefer not to say",

      complete:
        "Complete registration",

      validated:
        "Form validated",

      ready:
        "Profile ready for registration",

      readyDescription:
        "All information was successfully validated. Account creation will be enabled when authentication is connected to Neon.",

        review:
        "Review information",
      
      dataUse:
        "The requested information will be used for personalization, aggregated usage analysis and platform improvement.",
    },
  },
} as const;


export type TranslationDictionary =
  typeof translations[Language];