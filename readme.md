# Angular Major Concept
1. Decorator
   1. @NgModule
      1. Class will become Angular Module
         1. imports: array for standard Angular Modules
         2. exports: array to define contents of current module to be exported to other module
         3. declarations: array to declare components, pipes, directives to use in current module
         4. providers: array to declare all services in DI container
         5. boostratp: array to define one or more component to load inside the browser when the app is executed
   2. @Component
      1. Class will become angular component
         1. selector: staring, that is used to define  custom tag to use component in HTML page
         2. template: inline HTML templete string ``
         3. templateUrl: external html file
         4. style/styleUrls: inline and external styles
   3. @Injectable
      1. For Angular service
   4. @Pipe
   5. @Directive
   6. @input and @Output
   7. @HostListener
   8. @ViewChild        
# Angular Standard Packages
1. @angular/core
   1. All Standard Classes
      1. NgModule, Component, Injectable, Input, Output, etc.
2. @angular/common
   1. Common Module loader
   2. @angular/common/http
      1. For External Calls
3. @angular/router
   1. Routing
4. @angular/platform-browser
   1. Provides 'BrowserModule' that is used to load the Angular app in browser
5. @angular/platform-browser-dynamic
   1. Provider 'platformBrowserDynamic' object to bootstrap the current Angular Module
6. @angular/forms
   1. FOrms and validations
7. @angular/compiler
   1. For Ahead-of-Time compilation
8. core-js
   1. The polyfills for browsercompatibility
9. zone.js  
   1.  Browser level JS error reporting
10. rxjs
    1.  The Reactive Extensions for JavaScript
    2.  Used to store the Observable response for AJAX Calls   

#================= Angular Namaing Conventions ===============================
1. Module Name  
   1. app.XXXX.module.ts
2. Component
   1. app.XXXX.component.ts
3. View for Component
   1. app.XXXX.component.view.html OR
   2. app.XXXX.view.html
4. Model Class File
   1. app.XXXX.model.ts
5. Pipe
   1. app.XXXX.pipe.ts
6. Service
   1. app.XXXX.service.ts
7. Directive
   1. app.XXXX.directive.ts
8. Class Name must be Pascal case e.g. StudentComponent
9. Methods name must start from lower case or can use Camel Case
   1.  e.g. performOperation()
10. Variable Name, must be lower case

#=============================================================================
# Angular Binding
1. Interpolation AKA Expression Binding
   1. Read-only binding of public data member of Component class to HTML UI
   2. Syntax: {{<PUBLIC-DATA-MEMBER>}}
2. Property-Binding
   1. Binding of public data member of Component class to an attribute of HTML UI element.
   2. Alwas from Component-to-UI
   3. Syntax
      1. [<ATTRIBUTE>]="<PUBLIC-DATA-MEMBER>"
      2. e.g. [value]="name" / [href]="www.something.com"
3. Event-Binding
   1. Binding public methods of Component class with an event of HTML ELement
      1. Alwas from UI to Component
      2. Syntax
         1. (<EVENT-NAME>) = "<method>()"
         2. e.g. (click)="f1()", (change)="f2()"
4. Two-Way Binding
   1. Combination of Property Binding and Event Binding
   2. [(ngModel)]="<PUBLIC-DATA-MEMBER>" 
      1. When the UI ELement is changed, the ngModel will listen to change and Update Component Property that is bind to it
      2. The property update will be send to component
      3. Compoent will update itself with the updated property received from the UI 
      4. Component will update all properties depends on property being changed
      5. COmponent will push updates to UI and UI will be updated 
   3. ngModel is attribute directive, this needs 'FormsModule' from @angular/forms to be imported in @NgModule

