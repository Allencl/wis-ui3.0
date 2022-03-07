<template>
  <a-table :columns="columns" :data-source="data">


  </a-table>
</template>
<script>
  import { defineComponent } from 'vue';
  import {companyList} from '@/api/company'


export default defineComponent({
  components: {

  },
  setup() {
    // console.log()
    // console.log(b)
    companyList()
    .then((data)=>{
      // console.log(data)
    })


    const columns = [{
    name: 'Name',
    dataIndex: 'name',
    key: 'name',
    }, 
    {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    }, 
    {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    }, 
    {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    }, 
    {
    title: 'Action',
    key: 'action',
    }];
    const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
    }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    }];


    return {
      data,
      columns,
    };
  },

});
</script>