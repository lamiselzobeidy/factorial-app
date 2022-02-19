import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ShiftsService } from "../services/shifts.service";


export interface ShiftStateModel {
  active: boolean;
}
export class SendClockInAction {
  static readonly type = "[ShiftState] sendClockInAction"
  constructor(public payload: string) { }
}
export class SendClockOutAction {
  static readonly type = "[ShiftState] SendClockOutAction"
  constructor(public payload: string) { }
}

@State<ShiftStateModel>({
  name: "ShiftState",
  defaults: {
    active: false,
  }
})

@Injectable()
export class ShiftState {

  constructor(private shiftsService: ShiftsService) { }

  @Selector()
  static GetClockedUserState(state: ShiftStateModel) {
    return state.active
  }

  @Action(SendClockInAction)
  sendClockInAction(ctx: StateContext<ShiftStateModel>, action: SendClockInAction) {
    this.shiftsService.postClockIn(action.payload).subscribe(res => {
      ctx.patchState({ active: res.workable });
    })
  }

  @Action(SendClockOutAction)
  sendClockOutAction(ctx: StateContext<ShiftStateModel>, action: SendClockInAction) {
    this.shiftsService.postClockOut(action.payload).subscribe(res => {
      ctx.patchState({ active: res.workable });
    })
  }

}
