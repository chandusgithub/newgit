import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigateToHome extends NavigationMixin(LightningElement) {
    handleClick(){
        this[NavigationMixin.navigate]({
            type:'standard__namedPage',
            attributes:{

                pageName:'home'
            }
        })

    }
}