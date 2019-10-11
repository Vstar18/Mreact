import { observable, action } from 'mobx';

export default class GlobalModel {
    @observable username = '小明';

    @action.bound changeUserName = (name) => {
        this.username = name;
    }

}
