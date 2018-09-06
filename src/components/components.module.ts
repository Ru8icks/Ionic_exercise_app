import { NgModule } from '@angular/core';
import { TimerComponent } from './timer/timer';
import { CoolDownComponent } from './cool-down/cool-down';
import { SetComponent } from './set/set';
import { NoteComponent } from './note/note';
import { SetListComponent } from './set-list/set-list';
import { ProgramsComponent } from './prog/programs/programs';
import { ProgramComponent } from './prog/program/program';

@NgModule({
	declarations: [TimerComponent,
    CoolDownComponent,
    SetComponent,
    NoteComponent,
    SetListComponent,
    ProgramsComponent,
    ProgramComponent,
    ],
	imports: [],
	exports: [TimerComponent,
    CoolDownComponent,
    SetComponent,
    NoteComponent,
    SetListComponent,
    ProgramsComponent,
    ProgramComponent,
    ]
})
export class ComponentsModule {}
