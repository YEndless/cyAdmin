<template>

<div>

  <el-table
    :data="tableData.filter(data => !search || data.email.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
  >
    <el-table-column
      sortable
      label="id"
      prop="id"
    v-model="id">
    </el-table-column>
    <el-table-column
      sortable
      label="用户名"
      prop="email">
    </el-table-column>
    <el-table-column
      sortable
      label="昵称"
      prop="nickName">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入用户名关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <!--<el-button-->
          <!--size="mini"-->
          <!--@click="handleEdit(scope.$index, scope.row)">Edit</el-button>-->
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData:[
          {
            id: '',
            email: '',
            nickName: ''
          }
        ],
        search: '',
        multipleSelection: []

      }
    },

    created(){
      var that = this
      this.$http
        .get('http://localhost:8080/user/all')
        .then(function (response) {
          // alert(JSON.stringify(response.data));
          that.tableData = response.data;
        })
    },
    methods:{
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {

        console.log(index, row);
        this.$confirm('即将删除',
          '提示',
          {
            confirmButtonText:'确定',
            cancelButtonText:'取消',
            type:'warning'
        }).then((response)=>{
          this.$http
            .delete('http://localhost:8080/user/delete1/', {
              params:
              {
                id:row.id
              }
            }
            )
            .then(response=>{

            this.$message({message: response.data.msg, type : 'success'})
          })
        }

        ).catch(()=>{
          this.$message({
            type:'info',
            message:'删除取消'
          })
        })
      }
    }
  }
</script>
