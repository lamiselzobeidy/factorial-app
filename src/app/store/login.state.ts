import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";

export interface LoginStateModel {
  isLogedIn: boolean;
}

export class ChangeUserLoginAction {
  static readonly type = "[LoginState] Change user state action"
  constructor(public payload: boolean) { }
}



@State<LoginStateModel>({
  name: 'LoginState',
  defaults: {
    isLogedIn: false
  }
})

@Injectable()
export class LoginState {

  constructor() { }

  @Selector()
  static GetLogedInState(state: LoginStateModel) {
    return state
  }

  @Selector()
  static GetLogedInUser(state: LoginStateModel) {
    return state.isLogedIn
  }


  @Action(ChangeUserLoginAction)
  changeUserloginStateAction(
    ctx: StateContext<LoginStateModel>,
    action: ChangeUserLoginAction) {
    let state = ctx.getState()
    ctx.setState({ ...state, isLogedIn: action.payload })
  }


}
