<template>
  <div id="app">
    <b-container>
      <b-nav tabs>
        <b-nav-item to="/todos">Todos</b-nav-item>
        <b-nav-item to="/login">Login</b-nav-item>
        <b-nav-item to="/secret">Secret</b-nav-item>
        <b-nav-item v-if="isLogged" @click.prevent="logout">Logout</b-nav-item>
      </b-nav>
      <h1 class="text-center text-muted">Vue Vuex TS</h1>
      <router-view/>
    </b-container>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator'
import { State } from 'vuex-class';
import AuthMixin from '@/mixins/AuthMixin';

@Component({
  mixins: [AuthMixin]
})
export default class App extends Vue {
  @State('isLogged', {namespace: 'authModule'}) isLogged !: boolean;
  public currentPath: string = '/';
  @Watch('$route.path', {immediate: true})
  changeRoute(path: string): void {
    this.currentPath= path;
    console.log(this.currentPath);
  }

}
</script>
