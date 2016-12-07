import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
    router: Router;
    
    configureRouter(config: RouterConfiguration, router: Router){
        config.title = 'Contatos';
        config.map([
           { route: '',             moduleId: 'no-selection', title: 'Selecione'}, //Default route
           { route: 'contatos/:id', moduleId: 'contact-detail', name: 'contatos'} 
        ]);
    
        this.router = router;
    }
    
}
