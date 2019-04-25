<template>

  <div>

    <el-table
      :data="tableData.filter(data => !search || data.auther.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
      :default-sort = "{prop: 'date', order: 'descending'}"
    >
      <el-table-column
        sortable
        label="id"
        prop="id"
        width="80">
      </el-table-column>
      <el-table-column
        sortable
        label="作者"
        prop="auther"
        width="100">
      </el-table-column>
      <el-table-column
        sortable
        label="分类"
        prop="category"
        width="100">
      </el-table-column>
      <el-table-column
        sortable
        label="标题"
        prop="name"
        width="150">
      </el-table-column>
      <el-table-column
        sortable
        label="作者id"
        prop="userId"
        width="100">
      </el-table-column>
      <el-table-column
        sortable
        label="发布时间"
        prop="sendTime">
      </el-table-column>
      <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入作者关键字搜索"/>
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
            auther: '',
            category: '',
            name:'',
            userId:'',
            sendTime:''
          }
        ],
        search: ''
      }
    },
    created(){
      var that = this
      this.$http
        .get('http://localhost:8080/article/all')
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
              .delete('http://localhost:8080/article/delete1/', {
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
