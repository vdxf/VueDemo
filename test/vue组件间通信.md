## 父组件传给子组件(props)

<!-- 父组件 -->
<template>
  <div>
    <h1>{{ name }}</h1>
    <son :message="data"></son>
  </div>
</template>

<script>
import son from '@/components/son.vue';

export default {
  data () {
    return {
      name: '父组件',
      data: '父组件发送消息给子组件(props)'
    }
  },
  components: {
    son
  },
};
</script>
<!-- 子组件 -->
<template>
  <div>
    <h1>{{ name }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '子组件',
      data: '123',
    }
  },
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

## 子组件传给父组件(props)

<!-- 父组件 -->
<template>
  <div>
    <h1>{{ name }}</h1>
    <p>{{ message }}</p>
    <son :getMessage1="getMessage"></son>
  </div>
</template>

<script>
import son from '@/components/son.vue';

export default {
  data () {
    return {
      name: '父组件',
      // data: '父组件发送消息给子组件(props)',
      message: ''
    }
  },
  components: {
    son
  },
  methods: {
    getMessage (message) {
      this.message = message
    }
  }
};
</script>
<!-- 子组件 -->
<template>
  <div>
    <h1>{{ name }}</h1>
    <button @click="sendMessage">子组件发送消息给父组件</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '子组件',
      data: '子组件发送消息给父组件(props)'
      // data: '123',
    }
  },
  methods: {
    sendMessage () {
      this.getMessage1(this.data)
    }
  },
  props: ['getMessage1']
}
</script>

## 子组件传给父组件($emit)
<!-- 父组件 -->
<template>
  <div>
    <h1>{{ name }}</h1>
    <P>{{ data }}</P>
    <son @messageRecieve="handleMessage"></son>
  </div>
</template>

<script>
import son from '@/components/son.vue';

export default {
  data () {
    return {
      name: '父组件',
      data: '456',
    }
  },
  components: {
    son
  },
  methods: {
    handleMessage (data) {
      this.data = data
    }
  }
};
</script>
<!-- 子组件 -->
<template>
  <div>
    <h1>{{ name }}</h1>
    <button @click="sendMessage">子组件发送消息给父组件</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '子组件',
      data: '子组件发送消息给父组件($emit)',
    }
  },
  methods: {
    sendMessage () {
      this.$emit('messageRecieve', this.data)
    }
  }
}
</script>

## 父组件传给子组件(attributes)

<!-- 父组件 -->
<template>
  <div>
    <h1>{{ name }}</h1>
    <son :data="data"></son>
  </div>
</template>

<script>
import son from '@/components/son.vue';

export default {
  data () {
    return {
      name: '父组件',
      data: '父组件发送消息给子组件(attributes)',
    }
  },
  components: {
    son
  },
};
</script>
<!-- 子组件 -->
<template>
  <div>
    <h1>{{ name }}</h1>
    <p>{{ $attrs.data }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '子组件',
      data: '123',
    }
  },
  inheritAttrs: false
}
</script>

## 父组件传给子组件($ref)

<!-- 父组件 -->
<template>
  <div>
    <h1>{{ name }}</h1>
    <button @click="sendMessage">父组件发送消息给子组件</button>
    <son ref="child"></son>
  </div>
</template>

<script>
import son from '@/components/son.vue';

export default {
  data () {
    return {
      name: '父组件',
      data: '父组件发送消息给子组件($ref)',
    }
  },
  components: {
    son
  },
  methods: {
    sendMessage () {
      this.$refs.child.handleMessage(this.data)
    }
  }
};
</script>
<!-- 子组件 -->
<template>
  <div>
    <h1>{{ name }}</h1>
    <p>{{ data }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '子组件',
      data: '123',
    }
  },
  methods: {
    handleMessage (data) {
      this.data = data
    }
  }
}
</script>

## 两个组件通信（$bus）

<!-- main.js -->
new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate () {
        Vue.prototype.$bus = this
    }
})
<!-- 发送组件 -->
<template>
  <div>
    <h1>{{ name }}</h1>
    <button @click="sendMessage">子组件发送消息给父组件</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '子组件',
      data: '子组件发送消息给父组件($bus)',
    }
  },
  methods: {
    sendMessage () {
      this.$bus.$emit('messageReceived', this.data)
    }
  }
}
</script>
<!-- 接收组件 -->
<template>
  <div>
    <h1>{{ name }}</h1>
    <p>{{ data }}</p>
    <son></son>
  </div>
</template>

<script>
import son from '@/components/son.vue';

export default {
  data () {
    return {
      name: '父组件',
      data: '456'
    }
  },
  components: {
    son
  },
  mounted () {
    this.$bus.$on('messageReceived', (data) => {
      this.data = data
    })
  }
};
</script>