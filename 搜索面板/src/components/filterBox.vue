<template>
  <div id="filterBox">
    <section class="top">
      <div class="left">根据资产标签筛选 ></div>
      <div class="center">
        <div class="navlist" v-for="item in filterBoxData" :key="item.id">
          <span>{{ item.name }}</span>
          <div class="dialog">
            <ul>
              <li v-for="iItem in item.selectedList" :key="iItem.id">
                {{ iItem.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right"></div>
    </section>
    <section class="content">
      <div class="line" v-for="(item, i) in filterBoxData" :key="item.name">
        <div class="row" :class="multipleIndex === i ? 'multiple' : ''">
          <div class="row-key">{{ item.name }}</div>
          <div class="row-value">
            <div class="list">
              <ul>
                <li
                  v-for="iItem in item.list"
                  :key="iItem.id"
                  @click="liSelected(iItem.id)"
                >
                  <i
                    :class="
                      selectList.includes(iItem.id) === true ? 'selected' : ''
                    "
                  ></i>
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
          <div class="row-btn">
            <button @click="rowBtn(i)">多 选</button>
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
    rowBtn(value) {
      this.multipleIndex = value;
      this.selectList = [];
    },
    // 取消按钮
    close() {
      this.multipleIndex = "";
    },
    // 点击勾选
    liSelected(value) {
      // 判断当前是否已勾选
      if (this.selectList.includes(value)) {
        let list = this.selectList.filter((item) => {
          return item !== value;
        });
        this.selectList = list;
      } else {
        this.selectList.push(value);
      }
    },
    // 多选确定
    confirm(value) {
      let obj = {
        id: value.id,
        name: value.name,
        selectedList: [],
      };
      this.selectList.map((item) => {
        value.list.filter((i) => {
          if (item === i.id) {
            console.log(666);
            obj.selectedList.push(i);
          }
        });
      });
      console.log(obj);
      this.navList.push(obj);
      this.selectList = [];
      this.close();
    },
  },
};
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
        height: 24px;
        line-height: 24px;
        color: #fff;
        margin-right: 20px;
        border: 1px solid #0060ff;
        padding: 0 35px 0 10px;
        color: #c4d0f5;
        cursor: pointer;
        &:hover {
          border: 1px solid #01e8fe;
        }
        span {
          &:hover {
            color: #01e8fe;
          }
        }
        .dialog {

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
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    // background-color: rgb(173, 132, 77);
    .row-key {
      width: 100px;
      height: 100%;
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
      .btn {
        display: none;
      }
      ul {
        height: 100%;
        padding: 0;
        margin: 0;
        li {
          height: 80%;
          float: left;
          margin-right: 50px;
          cursor: pointer;
          color: #697ee4;
          &:hover {
            color: #01e8fe;
          }
          &:first-child {
            margin-left: 20px;
          }
        }
      }
    }
    .row-btn {
      width: 110px;
      height: 100%;
      position: relative;
      background-color: #060d44;
      button {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 5px;
        margin: auto;
        height: 25px;
        width: 70px;
        padding-left: 20px;
        background: url(../assets/icon.png) no-repeat 6px -61px;
        background-size: 15px;
        transition: all 0.3s;
        &:hover {
          background: url(../assets/icon.png) no-repeat 6px -81px;
          background-size: 15px;
        }
      }
      // overflow: hidden;
      // zoom: 1;
      // background-color: rgb(90, 57, 13);
    }
  }
  .multiple {
    height: 100px;
    .row-value {
      position: relative;
      .btn {
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 10px;
        height: 35px;
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
      display: none;
    }
  }
}
ul {
  list-style: none;
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
