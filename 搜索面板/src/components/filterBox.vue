<template>
  <div id="filterBox">
    <section class="top">
      <div class="left">根据资产标签筛选 ></div>
      <div class="center">
        <div class="navlist" v-for="item in navList" :key="item.id">
          <div class="dialog">
            <ul>
              <li v-for="iItem in item.selectedList" :key="iItem.id">
                {{ iItem.name }}
              </li>
            </ul>
          </div>
          <span>{{ item.name }}</span>
        </div>
      </div>
      <div class="right"></div>
    </section>
    <section class="content">
      <div class="line" v-for="(item, i) in filterBoxData" :key="item.name">
        <div class="row" :class="multipleIndex === i ? 'multiple' : ''">
          <div class="row-key">{{ item.name }}</div>
          <vue-scroll :ops="ops">
            <div class="row-value">
            <div class="list">
              <ul>
                <li
                  v-for="iItem in item.list" :key="iItem.id" 
                  @click="multipleIndex === i ? liSelected(iItem.id) : liClick(item,iItem.id)">
                  <i :class="selectList.includes(iItem.id) === true ? 'selected' : ''"></i>
                  {{ iItem.name }}
                </li>
              </ul>
            </div>
            <div class="btn">
              <button
                :class="selectList.length !== 0 ? 'showBtn' : 'confirm'"
                @click="confirm(item)"
              >
                确 定
              </button>
              <button class="cancel" @click="close">取 消</button>
            </div>
          </div>
          </vue-scroll>
          <div class="row-btn">
            <button @click="rowBtn(item,i)">多 选</button>
            <button class="open" @click="open(item,i)">展 开</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "filterBox",
  data() {
    return {
      multipleIndex: "",
      selectList: [],
      navList: [],
      filterBoxData: [
        {
          id: "asdasaaaa",
          name: "操作系统",
          list: [
            {
              id: "Linux",
              name: "Linux",
            },
            {
              id: "windows",
              name: "windows",
            },
            {
              id: "ios",
              name: "ios",
            },
            {
              id: "66666",
              name: "66666",
            },
            {
              id: "dasda",
              name: "dasda",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
          ],
        },
        {
          id: "dsafasfgggg",
          name: "fasfdszfsd",
          list: [
            {
              id: "dassadda",
              name: "dassadda",
            },
            {
              id: "asfsfa",
              name: "asfsfa",
            },
            {
              id: "666f322366",
              name: "666f322366",
            },
            {
              id: "ifasdfos",
              name: "ifasdfos",
            },
            {
              id: "windofsfsdws",
              name: "windofsfsdws",
            },
            {
              id: "Linuxdasd",
              name: "Linuxdasd",
            },
          ],
        },
      ],
    };
  },
  methods: {
    //右侧多选按钮
    rowBtn(value, i) {
      // 赋值当前触发行的index 改变样式
      this.multipleIndex = i
      // 从已选择的列表中获取当前行中的选中项 -----回显
      const arr = this.navList.filter(item => {
        return item.id === value.id
      })
      // 当选中列表中有当前列的已选项时
      if (arr.length > 0) {
        // 将已选择项赋值当前行的选择数组this.selectList
        this.selectList = arr[0].selectedList.map(item => {
          return item.id
        })
      } else {
        // 若选中列表没有当前列的已选项时,将选择数组置空
        this.selectList = []
      }
    },
    open(value, i) {
      // 赋值当前触发行的index 改变样式
      this.multipleIndex = i
    },
    // 取消按钮
    close() {
      this.multipleIndex = ""
    },
    // 单选
    async liClick(item,value){  
      await this.liSelected(value)
      await this.confirm(item)
    },
    // 点击勾选(多选)
    liSelected(value) {
      console.log(value, 999666)
      // 判断当前是否已勾选
      if (this.selectList.includes(value)) {
        let list = this.selectList.filter((item) => {
          return item !== value
        });
        this.selectList = list
      } else {
        this.selectList.push(value)
      }
    },
    // 数据整理
    organizeData(value){
      let obj = {
        id: value.id,
        name: value.name,
        selectedList: []
      }
      this.selectList.map((item) => {
        value.list.filter((i) => {
          if (item === i.id) {
            obj.selectedList.push(i)
          }
        })
      })
       // 判断当前是新增列表还是修改列表
      let currentIndex = null
      const currentArr = this.navList.filter((item, i)=>{
        if(item.id === value.id){
          currentIndex = i
          return item
        }
      })
      // 如果是修改 则去重后重新赋值
      if(currentArr.length > 0){
        this.navList[currentIndex].selectedList.push(...obj.selectedList)
        this.navList[currentIndex].selectedList = [...new Set(this.navList[currentIndex].selectedList)]
      }else {
        // 如果是新增则push
        this.navList.push(obj)
      }
      this.selectList = []
    },
    // 多选确定
    confirm(value) {
      this.organizeData(value)
      this.close()
    }
  }
}
</script>

<style scoped lang="scss">
.line:after {
  content: "";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
#filterBox {
  font-size: 12px;
  width: 100%;
  background-color: #000b1f;
  .top {
    display: flex;
    height: 34px;
    line-height: 34px;
    font-size: 14px;
    .left {
      color: #fff;
      padding-left: 25px;
      background: url(../assets/pathIcon.png) no-repeat 0 6px;
      margin-right: 30px;
    }
    .center {
      display: flex;
      align-items: center;
      .navlist {
        position: relative;
        height: 24px;
        line-height: 24px;
        margin-right: 20px;
        border: 1px solid #0060ff;
        color: #c4d0f5;
        cursor: pointer;
        &:hover {
          border: 1px solid #01e8fe;
          & > .dialog {
              display: block;
            }
        }
        span {
          position: relative;
          display: inline-block;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          padding: 0 35px 0 10px;
          z-index: 10;
          background: url(../assets/icon.png) no-repeat calc(100% - 5px) 8px;
          background-size: 15px;
          // border-bottom: 1px solid #000;
          &:hover {
            color: #01e8fe;
            border-bottom: 1px solid #000;
            background: url(../assets/icon.png) no-repeat calc(100% - 5px) -42px;
            background-size: 15px;
          }
        }
        .dialog {
          display: none;
          position: absolute;
          left: -1px;
          top: 23px;
          width: 340px;
          background-color: #000b1f;
          border: 1px solid #01e8fe;
          z-index: 2;
          padding: 20px 0;
          ul {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            padding: 0;
            margin: 0;
            padding-left: 20px;
            li {
              width: 26%;
              text-align: left;
              margin-right: 16px;
              &:hover {
                color: #01e8fe;
              }
            }
          }
          &:hover {
            display: block;
            & + span {
              border-bottom: 1px solid #000;
            }
          }
        }
      }
    }
    padding-top: 10px;
    margin-bottom: 30px;
  }
  .line {
    border: 1px solid #19268c;
    border-bottom: none;
    &:last-child {
      border: 1px solid #19268c;
    }
  }
  .row {
    position: relative;
    width: 100%;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    .row-key {
      width: 100px;
      padding-left: 10px;
      white-space: nowrap;
      overflow: hidden;
      background-color: #131c64;
      color: #d9e0f8;
    }
    .row-value {
      flex: 1;
      height: 100%;
      background-color: #060d44;
      max-height: 150px;
      overflow-y: auto;
      .btn {
        display: none;
      }
      ul {
        height: 100%;
        padding: 0;
        margin: 0;
        padding-left: 20px;
        li {
          height: 80%;
          float: left;
          margin-right: 50px;
          text-align: left;
          cursor: pointer;
          color: #697ee4;
          &:hover {
            color: #01e8fe;
          }
        }
      }
    }
    .row-btn {
      width: 210px;
      position: relative;
      background-color: #060d44;
      padding-top: 8px;
      button {
        position: absolute;
        right: 30px;
        height: 25px;
        width: 70px;
        padding-left: 20px;
        background: url(../assets/icon.png) no-repeat 6px -60px;
        background-size: 15px;
        transition: all 0.3s;
        &:hover {
          background: url(../assets/icon.png) no-repeat 6px -81px;
          background-size: 15px;
        }
      }
      .open {
        padding: 0 20px 0 0;
        left: 30px;
        background: url(../assets/icon.png) no-repeat 88% 8px;
        background-size: 15px;
        &:hover {
          background: url(../assets/icon.png) no-repeat 88% -8px;
          background-size: 15px;
        }
      }
    }
  }
  .multiple {
    // min-height: 100px;
    .row-value {
      position: relative;
      min-height: 90px;
      max-height: 150px;
      .list {
        padding-bottom: 5px;
        &:after {
          content: "";
          display: block;
          clear: both;
          height: 0;
          visibility: hidden;
        }
        
      }
      .btn {
        display: block;
        // position: absolute;
        // left: 0;
        // right: 0;
        // bottom: 10px;
        width: 100%;
        height: 35px;
        // margin: auto;
        .confirm {
          background-color: transparent;
          color: #97abea;
          border: 1px solid #97abea;
          cursor: default;
          opacity: 0.2;
        }
        .cancel {
          background: transparent;
        }
        button {
          height: 25px;
          width: 70px;

          &:first-child {
            margin-right: 10px;
          }
          &:last-child {
            margin-left: 10px;
          }
        }
      }
      ul li {
        position: relative;
        padding-left: 18px;
        margin-right: 32px;
        cursor: pointer;
        user-select: none;
        color: #697ee4;
        i {
          position: absolute;
          left: 0;
          top: 11px;
          background: url(../assets/icon.png) no-repeat 9999px 9999px;
          background-size: 100%;
          display: inline-block;
          height: 12px;
          width: 12px;
          border: 1px solid #697ee4;
          font-size: 0;
        }
        .selected {
          border-color: #01e8fe;
          background-position: 0px -96px;
        }
      }
    }
    .row-btn {
      width: 210px;
      button {
        display: none;
      }
    }
  }
}
ul {
  list-style: none;
  user-select: none;
}
button {
  border: 1px solid #0060ff;
  color: #97abea;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    border: 1px solid #01e8fe;
    color: #01e8fe;
  }
}
.showBtn {
  background-color: transparent;
  color: #97abea;
  &:hover {
    background-color: #01e8fe;
    color: #000;
  }
}
</style>
