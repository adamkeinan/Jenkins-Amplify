## FILE STRUCTURE ##

└───src
    │   App.vue  # Where main router view switching between dashboard view and login home happens. Also axios 401 interceptor is here
    │   main.js # where some plugins like axios are registered, i need to clean up and use the axios file back in plugins
    │
    ├───assets
    │   └───img
    │           redditicon.png
    │
    ├───components
    │   │   index.js          # registers all components
    │   │   LoginForm.vue          # this is where you can edit the login form which sends the login action
    │   │
    │   ├───core
    │   │       Drawer.vue          # the side bar- add or remove links in the sidebar here
    │   │       Filter.vue             # controls the sidebar background images, it is the floating gray cog on the left
    │   │       Footer.vue
    │   │       Toolbar.vue
    │   │
    │   ├───DashViews = > Rename to layout
    │   │       ComplexTables.vue      # has pop up edit and inline edit crud tables without api. This is the page in the gif but its not         │   │        being used any more in the current build
    │   │
    │   │       Dashboard.vue          # this is the actual home screen dashboard with chartist js and other stuff
    │   │       Icons.vue
    │   │       Maps.vue
    │   │       Notifications.vue
    │   │       SimpleTables.vue       # basic tables without any crud
    │   │       TableList.vue           # basic tables without any crud  
    │   │       Typography.vue
    │   │       UserProfile.vue
    │   │       UsersTable.vue               # advanced crud table with search, inline editing and pop up edit hooked up to rest api
    │   │
    │   ├───error                       # unused error files that havent been hooked up
    │   │       Error.vue
    │   │       NotFound.vue
    │   │
    │   ├───helper
    │   │       Offset.vue                      # controls offset and such for elements in cards/chartcard and dashboard.vue
    │   │
    │   ├───material => Rename to base                   # all of these files where made by creative time to have a custom theme
    │   │       Card.vue  
    │   │       ChartCard.vue                 # you can change the charts aspect ratio and size with :ratio.
    │   │                                       use the settings here https://github.com/Yopadd/vue-chartist
    │   │       Notification.vue
    │   │       StatsCard.vue
    │   │ 
    │   └───Tables                    # i havent set these up to be added like normal vue components yet
    │           CrudTable.vue                  # this is the default unedited template for the crud table with the pop up edit box
    │           InlineEditTable.vue             # this is the default unedited template for the crud table with the inline edit box
    │
    ├───i18n
    │       index.js
    │
    ├───lang
    │   │   index.js
    │   │
    │   └───en
    │       │   Common.json
    │       │   Home.json
    │       │
    │       └───Core
    │               Footer.json
    │               Toolbar.json
    │
    ├───plugins
    │       axios.js                # not being used since its not imported in index.js but its there if you rather use vs the main.js settings
    │       chartist.js
    │       index.js
    │       theme.js
    │       vuetify.js           # not being used since its not imported in index.js but its there if you rather use vs the main.js settings
    │
    ├───router
    │       index.js            #rewrote the routing, the router gaurd to redirect to login if not auth is here
    │       paths.js           #rewrote the routing, the router gaurd to redirect to home if auth is here
    │
    ├───store
    │   │   actions.js         # this is where all the main actions are and where stuff like token refresh is
    │   │   getters.js
    │   │   index.js            # imports all the store folder and is imported into main.js
    │   │   mutations.js
    │   │   state.js
    │   │
    │   └───modules
    │       │   index.js          # this folder is the actions dealing with Filter.vue and their mutations and store
    │       │
    │       └───app
    │               mutations.js
    │               state.js
    │
    ├───styles
    │   │   index.scss
    │   │
    │   └───material-dashboard           # you can create or edit the vuetify brand/themes like "general" or "primary" here
    │           _alerts.scss
    │           _buttons.scss
    │           _cards.scss
    │           _checkboxes.scss
    │           _colors.scss
    │           _dropdown.scss
    │           _fixed-plugin.scss
    │           _footer.scss
    │           _inputs.scss
    │           _misc.scss
    │           _mixins.scss
    │           _sidebar.scss
    │           _tables.scss
    │           _tabs.scss
    │           _toolbar.scss
    │           _tooltips.scss
    │           _typography.scss
    │           _variables.scss
    │
    ├───utils
    │       vuex.js # used by the store in /store/modules/app
    │
    └───views
            DashboardView.vue  #/ any views that are a child of this will render inside the dash
            LoginHome.vue # any views/components that are a child of this will not have the toolbar etc around it
