interface LibreDashApp {
  id: string;
  name: string;
  icon: string;
  entry: string;
}

declare module "nuxt/schema" {
  interface AppConfigInput {
    apps?: LibreDashApp[];
  }

  interface AppConfig {
    apps: LibreDashApp[];
  }
}

export {};
