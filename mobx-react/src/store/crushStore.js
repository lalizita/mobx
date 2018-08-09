import {computed, autorun, observable, decorate} from "mobx"

class crushStore{
  @observable crushs = ['maicao']
  // metódos para pegar os valores
  // @computed get getCrushs(){
  //   return this.crushs
  // }
}

// decorate(crushStore, {
//   crushs: observable
// })
const store = window.store = new crushStore()
export default store

// autorun = (() => console.log(crushStore.crushs))
