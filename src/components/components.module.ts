import { NgModule } from '@angular/core';
import { TimerComponent } from './timer/timer';
import { CoolDownComponent } from './cool-down/cool-down';
import { SetComponent } from './set/set';
import { NoteComponent } from './note/note';
import { SetListComponent } from './set-list/set-list';

@NgModule({
	declarations: [TimerComponent,
    CoolDownComponent,
    SetComponent,
    NoteComponent,
    SetListComponent,
    ],
	imports: [],
	exports: [TimerComponent,
    CoolDownComponent,
    SetComponent,
    NoteComponent,
    SetListComponent,
    ]
})
export class ComponentsModule {}
