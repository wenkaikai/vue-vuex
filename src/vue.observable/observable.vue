//Home.vue
 <template>
  <div class="container">
    <button @click="setCount(count+1)">+1</button>
    <button @click="setCount(count-1)">-1</button>
    <div>store中count：{{count}}</div>
    <button @click="changeName(name1)">父页面修改name</button>
    <div>store中name：{{name}}</div>
    <!-- <router-link to="/detail">
      <h5>跳转到详情页</h5>
    </router-link> -->
  </div>
</template>  
    <script>
import { store, mutations } from "./store";
export default {
  data() {
    return {
      name1: "主页的name"
    };
  },
  computed: {
    count() {
      return store.count;
    },
    name() {
      return store.name;
    }
  },
  methods: {
    setCount: mutations.setCount,
    changeName: mutations.changeName
  },
  
};
</script>  