export interface FolderStructure {
  [key: string]: FolderStructure | null;
}

export interface Architecture {
  name: string;
  description: string;
  folders: FolderStructure;
  files?: { [path: string]: string };
}

export const architectures: { [key: string]: Architecture } = {
  monolithic: {
    name: 'Monolithic (Classic SPA)',
    description: 'Simple and traditional structure for Single Page Applications',
    folders: {
      src: {
        components: {
          common: {
            Button: null,
            Input: null,
            Card: null,
            Modal: null,
            Dropdown: null,
            Spinner: null,
            Toast: null,
          },
          layout: {
            Header: null,
            Footer: null,
            Sidebar: null,
            Navbar: null,
          },
          forms: null,
        },
        pages: {
          Home: null,
          About: null,
          Contact: null,
          Dashboard: null,
          Profile: null,
          Settings: null,
          NotFound: null,
        },
        services: {
          api: null,
          auth: null,
          storage: null,
        },
        hooks: {
          useAuth: null,
          useFetch: null,
          useLocalStorage: null,
          useDebounce: null,
          useMediaQuery: null,
        },
        utils: {
          validators: null,
          formatters: null,
          helpers: null,
          constants: null,
        },
        contexts: {
          AuthContext: null,
          ThemeContext: null,
          UserContext: null,
        },
        routes: null,
        styles: {
          global: null,
          variables: null,
          themes: null,
        },
        assets: {
          images: null,
          icons: null,
          fonts: null,
        },
        types: {
          models: null,
          api: null,
          components: null,
        },
        config: null,
      },
    },
    files: {
      'src/components/README.md': '# Components\n\nReusable UI components organized by category.\n\n## Structure\n- `common/`: Basic reusable components\n- `layout/`: Layout components\n- `forms/`: Form-specific components',
      'src/pages/README.md': '# Pages\n\nApplication pages/views. Each page represents a route.',
      'src/services/README.md': '# Services\n\nAPI calls and external service integrations.',
      'src/hooks/README.md': '# Custom Hooks\n\nReusable React hooks for common logic.',
      'src/contexts/README.md': '# Contexts\n\nReact Context providers for global state management.',
    },
  },

  layered: {
    name: 'Layered Architecture',
    description: 'Clear separation between presentation, business logic, and data layers',
    folders: {
      src: {
        presentation: {
          components: {
            atoms: null,
            molecules: null,
            organisms: null,
          },
          pages: {
            Dashboard: null,
            Auth: null,
            Profile: null,
            Settings: null,
          },
          layouts: {
            MainLayout: null,
            AuthLayout: null,
            DashboardLayout: null,
          },
          styles: {
            themes: null,
            global: null,
          },
        },
        application: {
          hooks: {
            useAuth: null,
            useUser: null,
            useApi: null,
            useForm: null,
          },
          contexts: {
            AuthContext: null,
            UserContext: null,
            AppContext: null,
          },
          store: {
            slices: null,
            selectors: null,
            middleware: null,
          },
          useCases: {
            auth: null,
            user: null,
            data: null,
          },
        },
        domain: {
          models: {
            User: null,
            Post: null,
            Comment: null,
          },
          entities: {
            BaseEntity: null,
          },
          repositories: {
            UserRepository: null,
            PostRepository: null,
          },
          interfaces: {
            IRepository: null,
            IService: null,
          },
          validators: null,
        },
        infrastructure: {
          api: {
            client: null,
            endpoints: null,
            interceptors: null,
          },
          services: {
            AuthService: null,
            UserService: null,
            StorageService: null,
          },
          config: {
            env: null,
            constants: null,
            routes: null,
          },
          persistence: {
            localStorage: null,
            sessionStorage: null,
            indexedDB: null,
          },
        },
        shared: {
          utils: {
            formatters: null,
            validators: null,
            helpers: null,
          },
          constants: {
            apiEndpoints: null,
            errorMessages: null,
            statusCodes: null,
          },
          types: {
            common: null,
            api: null,
            components: null,
          },
          guards: null,
        },
        assets: {
          images: null,
          icons: null,
          fonts: null,
          styles: null,
        },
      },
    },
    files: {
      'src/presentation/README.md': '# Presentation Layer\n\nUI components, pages, and layouts. Only concerned with rendering.',
      'src/application/README.md': '# Application Layer\n\nApplication logic, use cases, state management, and hooks.',
      'src/domain/README.md': '# Domain Layer\n\nBusiness logic, entities, models, and domain rules.',
      'src/infrastructure/README.md': '# Infrastructure Layer\n\nTechnical implementations, APIs, external services, and persistence.',
      'src/shared/README.md': '# Shared\n\nCode shared across all layers.',
    },
  },

  featureBased: {
    name: 'Feature-Based / Modular',
    description: 'Organization by features/modules with vertical slicing',
    folders: {
      src: {
        features: {
          auth: {
            components: {
              LoginForm: null,
              RegisterForm: null,
              ForgotPassword: null,
              SocialLogin: null,
            },
            hooks: {
              useAuth: null,
              useLogin: null,
              useRegister: null,
            },
            services: {
              authService: null,
              tokenService: null,
            },
            pages: {
              LoginPage: null,
              RegisterPage: null,
            },
            types: null,
            utils: null,
            constants: null,
            store: null,
          },
          user: {
            components: {
              UserProfile: null,
              UserAvatar: null,
              UserSettings: null,
              UserList: null,
            },
            hooks: {
              useUser: null,
              useUserProfile: null,
              useUserSettings: null,
            },
            services: {
              userService: null,
            },
            pages: {
              ProfilePage: null,
              SettingsPage: null,
            },
            types: null,
            utils: null,
            store: null,
          },
          dashboard: {
            components: {
              DashboardStats: null,
              DashboardCharts: null,
              DashboardWidgets: null,
            },
            hooks: {
              useDashboard: null,
              useStats: null,
            },
            services: {
              dashboardService: null,
              analyticsService: null,
            },
            pages: {
              DashboardPage: null,
            },
            types: null,
            utils: null,
            store: null,
          },
          posts: {
            components: {
              PostList: null,
              PostCard: null,
              PostForm: null,
              PostDetail: null,
            },
            hooks: {
              usePosts: null,
              usePost: null,
              useCreatePost: null,
            },
            services: {
              postService: null,
            },
            pages: {
              PostsPage: null,
              PostDetailPage: null,
            },
            types: null,
            utils: null,
            store: null,
          },
          comments: {
            components: {
              CommentList: null,
              CommentForm: null,
              CommentItem: null,
            },
            hooks: {
              useComments: null,
            },
            services: {
              commentService: null,
            },
            types: null,
            utils: null,
          },
        },
        shared: {
          components: {
            Button: null,
            Input: null,
            Card: null,
            Modal: null,
            Table: null,
            Spinner: null,
            Toast: null,
            Dropdown: null,
          },
          hooks: {
            useFetch: null,
            useLocalStorage: null,
            useDebounce: null,
            useMediaQuery: null,
            useToggle: null,
          },
          utils: {
            formatters: null,
            validators: null,
            helpers: null,
            api: null,
          },
          types: {
            common: null,
            api: null,
          },
          constants: {
            routes: null,
            apiEndpoints: null,
            errorMessages: null,
          },
          guards: null,
        },
        layouts: {
          MainLayout: null,
          AuthLayout: null,
          DashboardLayout: null,
        },
        routes: {
          index: null,
          ProtectedRoute: null,
        },
        config: {
          env: null,
          api: null,
        },
        assets: {
          images: null,
          icons: null,
          fonts: null,
          styles: {
            themes: null,
            global: null,
          },
        },
      },
    },
    files: {
      'src/features/README.md': '# Features\n\nEach feature is self-contained with its own components, hooks, services, and logic.\n\n## Structure\nEach feature folder contains:\n- `components/`: Feature-specific components\n- `hooks/`: Feature-specific hooks\n- `services/`: API calls for this feature\n- `pages/`: Feature pages\n- `types/`: TypeScript types\n- `utils/`: Feature utilities\n- `store/`: Feature state (if needed)',
      'src/features/auth/README.md': '# Auth Feature\n\nAuthentication and authorization functionality.',
      'src/features/user/README.md': '# User Feature\n\nUser management and profile.',
      'src/shared/README.md': '# Shared\n\nCode shared across all features.',
    },
  },

  cleanArchitecture: {
    name: 'Clean Architecture',
    description: 'Clean architecture with inverted dependencies and SOLID principles',
    folders: {
      src: {
        core: {
          entities: {
            User: null,
            Post: null,
            Comment: null,
            Product: null,
          },
          useCases: {
            auth: {
              Login: null,
              Logout: null,
              Register: null,
              RefreshToken: null,
            },
            user: {
              GetUser: null,
              UpdateUser: null,
              DeleteUser: null,
            },
            posts: {
              GetPosts: null,
              CreatePost: null,
              UpdatePost: null,
              DeletePost: null,
            },
          },
          interfaces: {
            repositories: {
              IUserRepository: null,
              IPostRepository: null,
            },
            services: {
              IAuthService: null,
              IStorageService: null,
            },
            useCases: null,
          },
          errors: {
            DomainError: null,
            ValidationError: null,
          },
          validators: {
            UserValidator: null,
            PostValidator: null,
          },
        },
        adapters: {
          controllers: {
            AuthController: null,
            UserController: null,
            PostController: null,
          },
          presenters: {
            UserPresenter: null,
            PostPresenter: null,
          },
          repositories: {
            UserRepository: null,
            PostRepository: null,
            CommentRepository: null,
          },
          gateways: {
            ApiGateway: null,
            StorageGateway: null,
          },
          viewModels: {
            UserViewModel: null,
            PostViewModel: null,
          },
        },
        infrastructure: {
          api: {
            client: {
              httpClient: null,
              interceptors: null,
            },
            endpoints: {
              auth: null,
              users: null,
              posts: null,
            },
            dto: {
              UserDTO: null,
              PostDTO: null,
            },
          },
          database: {
            indexedDB: null,
            localStorage: null,
          },
          config: {
            environment: null,
            constants: null,
            routes: null,
          },
          services: {
            AuthService: null,
            StorageService: null,
            LoggerService: null,
          },
        },
        ui: {
          components: {
            common: {
              Button: null,
              Input: null,
              Card: null,
              Modal: null,
            },
            layout: {
              Header: null,
              Footer: null,
              Sidebar: null,
            },
            features: {
              auth: null,
              user: null,
              posts: null,
            },
          },
          pages: {
            Home: null,
            Dashboard: null,
            Profile: null,
            Login: null,
          },
          layouts: {
            MainLayout: null,
            AuthLayout: null,
          },
          hooks: {
            useViewModel: null,
            useController: null,
          },
          routes: null,
        },
        shared: {
          utils: {
            formatters: null,
            helpers: null,
            crypto: null,
          },
          constants: {
            apiRoutes: null,
            errorCodes: null,
          },
          types: {
            common: null,
            api: null,
          },
          guards: null,
        },
        assets: {
          images: null,
          icons: null,
          fonts: null,
          styles: {
            themes: null,
            global: null,
          },
        },
      },
    },
    files: {
      'src/core/README.md': '# Core Layer\n\nEntities, use cases, and business rules. No dependencies on external layers.\n\n## Principles\n- Independent of frameworks\n- Testable\n- Independent of UI\n- Independent of database',
      'src/adapters/README.md': '# Adapters Layer\n\nConverts data between the core and infrastructure layers.\n\nIncludes controllers, presenters, repositories, and gateways.',
      'src/infrastructure/README.md': '# Infrastructure Layer\n\nExternal implementations, APIs, databases, and services.',
      'src/ui/README.md': '# UI Layer\n\nUser interface components, pages, and layouts.',
    },
  },

  atomicDesign: {
    name: 'Atomic Design',
    description: 'Components organized by complexity level (atoms → molecules → organisms → templates)',
    folders: {
      src: {
        components: {
          atoms: {
            Button: null,
            Input: null,
            Label: null,
            Icon: null,
            Text: null,
            Image: null,
            Link: null,
            Badge: null,
            Spinner: null,
            Checkbox: null,
            Radio: null,
            Switch: null,
            Avatar: null,
          },
          molecules: {
            FormField: null,
            SearchBar: null,
            Card: null,
            Dropdown: null,
            Pagination: null,
            Breadcrumb: null,
            Alert: null,
            Toast: null,
            Tooltip: null,
            Modal: null,
            DatePicker: null,
            FileUpload: null,
          },
          organisms: {
            Header: null,
            Footer: null,
            Navbar: null,
            Sidebar: null,
            LoginForm: null,
            RegisterForm: null,
            UserProfile: null,
            ProductList: null,
            CommentSection: null,
            DataTable: null,
            FilterPanel: null,
          },
          templates: {
            MainTemplate: null,
            AuthTemplate: null,
            DashboardTemplate: null,
            ProfileTemplate: null,
          },
        },
        pages: {
          HomePage: null,
          DashboardPage: null,
          LoginPage: null,
          RegisterPage: null,
          ProfilePage: null,
          SettingsPage: null,
          ProductsPage: null,
          NotFoundPage: null,
        },
        services: {
          api: {
            client: null,
            endpoints: null,
            interceptors: null,
          },
          auth: {
            authService: null,
            tokenService: null,
          },
          user: {
            userService: null,
          },
          storage: {
            localStorageService: null,
            sessionStorageService: null,
          },
        },
        hooks: {
          auth: {
            useAuth: null,
            useLogin: null,
            useLogout: null,
          },
          data: {
            useFetch: null,
            useQuery: null,
            useMutation: null,
          },
          ui: {
            useToggle: null,
            useMediaQuery: null,
            useDebounce: null,
            useThrottle: null,
          },
          storage: {
            useLocalStorage: null,
            useSessionStorage: null,
          },
        },
        store: {
          slices: {
            authSlice: null,
            userSlice: null,
            uiSlice: null,
          },
          selectors: null,
          middleware: null,
        },
        utils: {
          formatters: {
            dateFormatter: null,
            currencyFormatter: null,
            numberFormatter: null,
          },
          validators: {
            emailValidator: null,
            passwordValidator: null,
            formValidator: null,
          },
          helpers: {
            arrayHelpers: null,
            objectHelpers: null,
            stringHelpers: null,
          },
        },
        routes: {
          index: null,
          ProtectedRoute: null,
          PublicRoute: null,
        },
        types: {
          models: {
            User: null,
            Post: null,
            Comment: null,
          },
          api: {
            Request: null,
            Response: null,
          },
          components: {
            ButtonProps: null,
            InputProps: null,
          },
        },
        config: {
          env: null,
          constants: null,
          routes: null,
        },
        assets: {
          images: {
            logos: null,
            illustrations: null,
            backgrounds: null,
          },
          icons: {
            social: null,
            ui: null,
          },
          fonts: null,
          styles: {
            themes: {
              light: null,
              dark: null,
            },
            global: null,
            variables: null,
          },
        },
      },
    },
    files: {
      'src/components/atoms/README.md': '# Atoms\n\nBasic building blocks. Cannot be broken down further.\n\nExamples: Button, Input, Label, Icon, Text',
      'src/components/molecules/README.md': '# Molecules\n\nCombinations of atoms working together.\n\nExamples: SearchBar (Input + Button), FormField (Label + Input + Error), Card (Image + Text + Button)',
      'src/components/organisms/README.md': '# Organisms\n\nComplex components made of molecules and atoms.\n\nExamples: Header (Logo + Navigation + SearchBar), LoginForm (FormFields + Button), ProductList (Cards)',
      'src/components/templates/README.md': '# Templates\n\nPage layouts without real content. Define structure.\n\nExamples: MainTemplate (Header + Sidebar + Content + Footer)',
      'src/pages/README.md': '# Pages\n\nTemplates filled with real content. Represent specific instances.',
    },
  },

  microFrontends: {
    name: 'Micro-Frontends',
    description: 'Independent applications integrated into a single shell',
    folders: {
      src: {
        apps: {
          shell: {
            components: {
              AppShell: null,
              Navigation: null,
              ErrorBoundary: null,
            },
            config: {
              routes: null,
              remotes: null,
              federation: null,
            },
            layouts: {
              MainLayout: null,
            },
            hooks: {
              useMicroFrontend: null,
            },
          },
          auth: {
            components: {
              LoginForm: null,
              RegisterForm: null,
              ForgotPassword: null,
            },
            pages: {
              LoginPage: null,
              RegisterPage: null,
            },
            services: {
              authService: null,
              tokenService: null,
            },
            hooks: {
              useAuth: null,
            },
            store: null,
            routes: null,
          },
          dashboard: {
            components: {
              DashboardStats: null,
              DashboardCharts: null,
              DashboardWidgets: null,
            },
            pages: {
              DashboardPage: null,
              AnalyticsPage: null,
            },
            services: {
              dashboardService: null,
              analyticsService: null,
            },
            hooks: {
              useDashboard: null,
            },
            store: null,
            routes: null,
          },
          profile: {
            components: {
              ProfileCard: null,
              ProfileSettings: null,
              ProfileAvatar: null,
            },
            pages: {
              ProfilePage: null,
              SettingsPage: null,
            },
            services: {
              userService: null,
            },
            hooks: {
              useProfile: null,
            },
            store: null,
            routes: null,
          },
        },
        shared: {
          components: {
            ui: {
              Button: null,
              Input: null,
              Card: null,
              Modal: null,
              Table: null,
            },
            layout: {
              Header: null,
              Footer: null,
              Sidebar: null,
            },
          },
          hooks: {
            useFetch: null,
            useLocalStorage: null,
            useEventBus: null,
          },
          utils: {
            formatters: null,
            validators: null,
            helpers: null,
          },
          types: {
            common: null,
            events: null,
          },
          constants: {
            events: null,
            routes: null,
          },
          config: {
            env: null,
            api: null,
          },
          eventBus: null,
        },
        assets: {
          images: null,
          icons: null,
          fonts: null,
          styles: {
            themes: null,
            global: null,
          },
        },
      },
    },
    files: {
      'src/apps/shell/README.md': '# App Shell\n\nMain container that orchestrates and integrates all micro-frontends.\n\n## Responsibilities\n- Routing between micro-frontends\n- Shared navigation\n- Error handling\n- Module federation configuration',
      'src/apps/auth/README.md': '# Auth Micro-Frontend\n\nIndependent authentication application.\n\nCan be developed, tested, and deployed separately.',
      'src/apps/dashboard/README.md': '# Dashboard Micro-Frontend\n\nIndependent dashboard application.',
      'src/shared/README.md': '# Shared\n\nCode shared between micro-frontends.\n\n## Communication\n- Event bus for inter-app communication\n- Shared state management\n- Common UI components',
    },
  },

  mvc: {
    name: 'MVC / MVVM',
    description: 'Model-View-Controller / Model-View-ViewModel pattern',
    folders: {
      src: {
        models: {
          User: null,
          Post: null,
          Comment: null,
          Product: null,
          Auth: null,
        },
        views: {
          components: {
            common: {
              Button: null,
              Input: null,
              Card: null,
              Modal: null,
            },
            layout: {
              Header: null,
              Footer: null,
              Sidebar: null,
            },
            forms: {
              LoginForm: null,
              RegisterForm: null,
              UserForm: null,
            },
          },
          pages: {
            HomePage: null,
            DashboardPage: null,
            ProfilePage: null,
            LoginPage: null,
            RegisterPage: null,
          },
          layouts: {
            MainLayout: null,
            AuthLayout: null,
          },
        },
        controllers: {
          AuthController: null,
          UserController: null,
          PostController: null,
          ProductController: null,
        },
        viewModels: {
          AuthViewModel: null,
          UserViewModel: null,
          PostViewModel: null,
          DashboardViewModel: null,
        },
        services: {
          api: {
            client: null,
            endpoints: {
              auth: null,
              users: null,
              posts: null,
            },
          },
          auth: {
            AuthService: null,
            TokenService: null,
          },
          data: {
            UserService: null,
            PostService: null,
          },
          storage: {
            LocalStorageService: null,
            SessionStorageService: null,
          },
        },
        utils: {
          formatters: {
            dateFormatter: null,
            currencyFormatter: null,
          },
          validators: {
            emailValidator: null,
            passwordValidator: null,
          },
          helpers: {
            apiHelpers: null,
            routeHelpers: null,
          },
        },
        routes: {
          index: null,
          guards: {
            AuthGuard: null,
            RoleGuard: null,
          },
        },
        config: {
          env: null,
          constants: null,
          routes: null,
        },
        types: {
          models: null,
          api: null,
          components: null,
          viewModels: null,
        },
        assets: {
          images: null,
          icons: null,
          fonts: null,
          styles: {
            themes: null,
            global: null,
          },
        },
      },
    },
    files: {
      'src/models/README.md': '# Models\n\nData models and business logic.\n\n## Responsibilities\n- Data structure\n- Business rules\n- Data validation\n- State management',
      'src/views/README.md': '# Views\n\nUI components and pages.\n\n## Responsibilities\n- Rendering\n- User interaction\n- Display logic only',
      'src/controllers/README.md': '# Controllers\n\nApplication flow control.\n\n## Responsibilities\n- Handle user input\n- Update models\n- Select views\n- Orchestrate business logic',
      'src/viewModels/README.md': '# ViewModels\n\nPrepare data for views (MVVM pattern).\n\n## Responsibilities\n- Transform model data for display\n- Handle view state\n- Execute commands\n- Data binding logic',
    },
  },
};