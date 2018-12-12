import { Component, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { State } from 'vuex-class';
import Template from './template.vue';
import { User } from '@/store/modules/auth/types';
import AuthMixin from '@/mixins/AuthMixin';
const namespace: string = 'authModule';

Component.registerHooks(['beforeRouteEnter']);

@Component({
  mixins: [Template, AuthMixin]
})
export default class Secret extends Vue {
  @State('isLogged', { namespace })
  isLogged!: boolean;
  @State('user', { namespace })
  user!: User;

  // Esto es un Hook y dentro de los Hooks se pierde el contexto de la función o clase donde está
  // por lo que este caso dentro no se podría hacer this.isLogged
  async beforeRouteEnter(from: Route, to: Route, next: any) {
    // Para acceder a una instancia dentro de un Hook usamos next
    next((vm: Secret) => {
      if (vm.isLogged === false) {
        next('/login');
      }
    });
  }
  // Propiedades computadas con TS
  get fullUser(): string {
    return `Email: ${this.user.email}, Password: ${this.user.password}`;
  }
}
