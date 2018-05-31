import { NgModule } from '@angular/core';
import { TimerComponent } from './timer/timer';
import { CoolDownComponent } from './cool-down/cool-down';

@NgModule({
	declarations: [TimerComponent,
    CoolDownComponent,
    ],
	imports: [],
	exports: [TimerComponent,
    CoolDownComponent,
    ]
})
export class ComponentsModule {}
