import { Component, Inject, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import Template from './template.vue';
import { Validator } from 'vee-validate';

@Component({
  mixins: [Template],
})
export default class TodoForm extends Vue {
  public todo!: string;
  @Action('addTodo', { namespace: 'todoModule' })
  public addTodo!: Function;
  @Inject('$validator') public $validator!: Validator;

  constructor() {
    super();
    this.todo = '';
  }
  public async validate() {
    const validator = await this.$validator.validateAll();
    if (validator) {
      this.addTodo(this.todo);
    }
  }
  public submitTodo(todo: string) {
    this.addTodo(todo).then(() => {
      this.todo = '';
    });
  }
}
