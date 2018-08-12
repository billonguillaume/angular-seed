import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    public companyName = 'Company name';
    public applicationName = 'AngularSeed';
    public version: string;

    public ngOnInit(): void {
        // this.version = require('./../../../../../package.json').version;
    }
}
