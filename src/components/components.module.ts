import { NgModule } from '@angular/core';
import { TimerComponent } from './timer/timer';
import { CoolDownComponent } from './cool-down/cool-down';
import { SetComponent } from './set/set';
import { NoteComponent } from './note/note';

@NgModule({
	declarations: [TimerComponent,
    CoolDownComponent,
    SetComponent,
    NoteComponent,
    ],
	imports: [],
	exports: [TimerComponent,
    CoolDownComponent,
    SetComponent,
    NoteComponent,
    ]
})
export class ComponentsModule {}
