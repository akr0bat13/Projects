import { postModule } from "@/store/postModule";
import { createStore } from "vuex";

export default createStore({
  modules: {
    post: postModule
  }
})