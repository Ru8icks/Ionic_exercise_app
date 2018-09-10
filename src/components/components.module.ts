import { NgModule } from '@angular/core';
import { TimerComponent } from './workout/timer/timer';
import { CoolDownComponent } from './workout/cool-down/cool-down';
import { SetComponent } from './workout/set/set';
import { NoteComponent } from './workout/note/note';
import { SetListComponent } from './workout/set-list/set-list';
import { ProgramsComponent } from './prog/programs/programs';
import { ProgramComponent } from './prog/program/program';
import { GraphComponent } from './stats/graph/graph';

@NgModule({
	declarations: [TimerComponent,
    CoolDownComponent,
    SetComponent,
    NoteComponent,
    SetListComponent,
    ProgramsComponent,
    ProgramComponent,
    GraphComponent,
    ],
	imports: [],
	exports: [TimerComponent,
    CoolDownComponent,
    SetComponent,
    NoteComponent,
    SetListComponent,
    ProgramsComponent,
    ProgramComponent,
    GraphComponent,
    ]
})
export class ComponentsModule {}
