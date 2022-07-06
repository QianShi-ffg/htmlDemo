<template>
  <div id="filterBox">
    <section class="top">
      <div class="left">根据标签筛选 ></div>
      <div class="center">
        <div class="content">
          <div class="navlist" v-for="item in navList" :key="item.id">
            <div class="closeNav" @click="closeNav(item)">
              <i></i>
            </div>
            <div class="dialog">
              <ul>
                <li
                  v-for="iItem in item.selectedList"
                  :key="iItem.id"
                  :title="iItem.ancestorNames"
                >
                  {{ iItem.name }}
                </li>
              </ul>
            </div>
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
      <div class="right">
        <button @click="isFold" :class="currentType ? 'btnFold' : 'btnOpen'">
          <span>折叠</span>
        </button>
      </div>
    </section>
    <section v-if="currentType">
      <div
        style="
          border: none;
          border-top: 1px solid;
          border-image: linear-gradient(to right, #13d7da 7%, #0060ff 100%) 1 1;
        "
      ></div>
    </section>
    <section class="content" v-else>
      <div
        class="line"
        v-for="(item, i) in filterBoxData"
        :key="item.name"
        v-show="item.childList.length > 0"
      >
        <div class="row" :class="multipleIndex === i ? 'multiple' : ''">
          <div class="row-key">{{ item.name }}</div>
          <div class="row-value" ref="rowValue">
            <div class="list" ref="rowList">
              <ul class="rowValueList" ref="rowValueList">
                <li
                  v-for="iItem in item.childList"
                  :key="iItem.id"
                  :class="selectLi.includes(iItem.id) ? 'clickSelected' : ''"
                  @click="
                    multipleIndex === i
                      ? liSelected(iItem.id)
                      : liClick(item, iItem.id)
                  "
                  :title="iItem.ancestorNames"
                >
                  <i
                    :class="
                      selectList.includes(iItem.id) === true ? 'selected' : ''
                    "
                  ></i>
                  {{
                    item.name === "资产服务" ? iItem.ancestorNames : iItem.name
                  }}
                </li>
              </ul>
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
          </div>
          <div class="row-btn" v-if="item.childList.length > 0">
            <template v-if="isOpenList.includes(i)">
              <button class="open" @click="open(i)" v-if="openIndex !== i">
                展 开
              </button>
              <button class="folded" @click="folded(i)" v-else>收 起</button>
            </template>
            <button @click="rowBtn(item, i)">多 选</button>
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
      currentList: [],
      currentType: false,
      isOpenList: [],
      openIndex: null,
      multipleIndex: '',
      selectList: [],
      selectLi: [], // 当前选择的li数组
      navList: [],
      filterBoxData: [
        {
          id: "f9ff118f9bd94f2ab6b1afdcef7efa16",
          parentId: null,
          ancestorIds: null,
          ancestorNames: null,
          name: "aa",
          childList: [
            {
              id: "9fc33fbc7503403dbbc58ac1c11789da",
              parentId: "0",
              ancestorIds: "0",
              ancestorNames: "aaaaa",
              name: "aaaaaa",
              childList: null,
            },
          ],
        },
        {
          id: "45446ae2aecf4a10b40df4253d6dece4",
          parentId: null,
          ancestorIds: null,
          ancestorNames: null,
          name: "bb",
          childList: [
            {
              id: "259736e9b406451f9bd3eb85fe83155e",
              parentId: "0",
              ancestorIds: "0",
              ancestorNames: "bbbb",
              name: "bbbb",
              childList: null,
            },
          ],
        },
        {
          id: "d6f9f70df6184bc8ba29dd50d8841d89",
          parentId: null,
          ancestorIds: null,
          ancestorNames: null,
          name: "cc",
          childList: [
            {
              id: "e9679319beb74e208b72b55f3a0fca6e",
              parentId: "0",
              ancestorIds: "0",
              ancestorNames: "cccc",
              name: "cccc",
              childList: null,
            },
          ],
        },
        {
          id: "6d22479b128240f4be6dd7885e4d884c",
          parentId: null,
          ancestorIds: null,
          ancestorNames: null,
          name: "dd",
          childList: [
            {
              id: "dcb0a6daa7ef11ebbfb2000c299a2318",
              parentId: "0",
              ancestorIds: "0",
              ancestorNames: "da",
              name: "da",
              childList: null,
            },
            {
              id: "345cc5f5b85411eb91ee000c299a2318",
              parentId: "0",
              ancestorIds: "0",
              ancestorNames: "db",
              name: "db",
              childList: null,
            },
            {
              id: "d88fd45d5f0c11ec94b70242ac140004",
              parentId: "612b28fdb85411eb91ee000c299a2318",
              ancestorIds: "0,612b28fdb85411eb91ee000c299a2318",
              ancestorNames: "dc-a",
              name: "dc",
              childList: null,
            },
            {
              id: "c6689a84ed2111ec8052000c299a2318",
              parentId: "0",
              ancestorIds: "0",
              ancestorNames: "dd",
              name: "dd",
              childList: null,
            },
            {
              id: "e36e7ee6a7ef11ebbfb2000c299a2318",
              parentId: "0",
              ancestorIds: "0",
              ancestorNames: "de",
              name: "de",
              childList: null,
            },
            {
              id: "6ebc6b8b5f0e11ec94b70242ac140004",
              parentId: "e36e7ee6a7ef11ebbfb2000c299a2318",
              ancestorIds: "0,e36e7ee6a7ef11ebbfb2000c299a2318",
              ancestorNames: "df-a",
              name: "df",
              childList: null,
            },
            {
              id: "42733678ed2211ec8052000c299a2318",
              parentId: "e36e7ee6a7ef11ebbfb2000c299a2318",
              ancestorIds: "0,e36e7ee6a7ef11ebbfb2000c299a2318",
              ancestorNames: "dg-a",
              name: "dg",
              childList: null,
            },
            {
              id: "796e392f5f0e11ec94b70242ac140004",
              parentId: "e36e7ee6a7ef11ebbfb2000c299a2318",
              ancestorIds: "0,e36e7ee6a7ef11ebbfb2000c299a2318",
              ancestorNames: "dh-a",
              name: "dh",
              childList: null,
            },
            {
              id: "b8c1aa45ed2211ec8052000c299a2318",
              parentId: "e36e7ee6a7ef11ebbfb2000c299a2318",
              ancestorIds: "0,e36e7ee6a7ef11ebbfb2000c299a2318",
              ancestorNames: "di-a",
              name: "di",
              childList: null,
            },
            {
              id: "612b28fdb85411eb91ee000c299a2318",
              parentId: "0",
              ancestorIds: "0",
              ancestorNames: "dj",
              name: "dj",
              childList: null,
            },
            {
              id: "8990cdd15f0e11ec94b70242ac140004",
              parentId: "345cc5f5b85411eb91ee000c299a2318",
              ancestorIds: "0,345cc5f5b85411eb91ee000c299a2318",
              ancestorNames: "dk-a",
              name: "dk",
              childList: null,
            },
            {
              id: "000db46ced2311ec8052000c299a2318",
              parentId: "0",
              ancestorIds: "0",
              ancestorNames: "dl",
              name: "dl",
              childList: null,
            },
            {
              id: "f5e40f8c5f0e11ec94b70242ac140004",
              parentId: "e36e7ee6a7ef11ebbfb2000c299a2318",
              ancestorIds: "0,e36e7ee6a7ef11ebbfb2000c299a2318",
              ancestorNames: "dm-a",
              name: "dm",
              childList: null,
            },
            {
              id: "146f518fed2311ec8052000c299a2318",
              parentId: "0",
              ancestorIds: "0",
              ancestorNames: "dn",
              name: "dn",
              childList: null,
            },
            {
              id: "174622ef5f0f11ec94b70242ac140004",
              parentId: "e36e7ee6a7ef11ebbfb2000c299a2318",
              ancestorIds: "0,e36e7ee6a7ef11ebbfb2000c299a2318",
              ancestorNames: "do-a",
              name: "do",
              childList: null,
            },
            {
              id: "686e3e55ed2311ec8052000c299a2318",
              parentId: "0",
              ancestorIds: "0",
              ancestorNames: "dp",
              name: "dp",
              childList: null,
            },
            {
              id: "467f1fb85f0f11ec94b70242ac140004",
              parentId: "686e3e55ed2311ec8052000c299a2318",
              ancestorIds: "0,686e3e55ed2311ec8052000c299a2318",
              ancestorNames: "dq-a",
              name: "dq",
              childList: null,
            },
            {
              id: "809e32d9ed2511ec8052000c299a2318",
              parentId: "0",
              ancestorIds: "0",
              ancestorNames: "dr",
              name: "dr",
              childList: null,
            },
            {
              id: "668da1c35f0f11ec94b70242ac140004",
              parentId: "e36e7ee6a7ef11ebbfb2000c299a2318",
              ancestorIds: "0,e36e7ee6a7ef11ebbfb2000c299a2318",
              ancestorNames: "ds-a",
              name: "ds",
              childList: null,
            },
            {
              id: "7d6ec6615f0f11ec94b70242ac140004",
              parentId: "000db46ced2311ec8052000c299a2318",
              ancestorIds: "0,000db46ced2311ec8052000c299a2318",
              ancestorNames: "dt-a",
              name: "dt",
              childList: null,
            },
            {
              id: "94430d4b5f0f11ec94b70242ac140004",
              parentId: "e36e7ee6a7ef11ebbfb2000c299a2318",
              ancestorIds: "0,e36e7ee6a7ef11ebbfb2000c299a2318",
              ancestorNames: "du-a",
              name: "du",
              childList: null,
            },
            {
              id: "9d091e025f0f11ec94b70242ac140004",
              parentId: "146f518fed2311ec8052000c299a2318",
              ancestorIds: "0,146f518fed2311ec8052000c299a2318",
              ancestorNames: "dv-a",
              name: "dv",
              childList: null,
            },
            {
              id: "a98dfd975f0f11ec94b70242ac140004",
              parentId: "c6689a84ed2111ec8052000c299a2318",
              ancestorIds: "0,c6689a84ed2111ec8052000c299a2318",
              ancestorNames: "dw-a",
              name: "dw",
              childList: null,
            },
            {
              id: "d408e8415f0f11ec94b70242ac140004",
              parentId: "e36e7ee6a7ef11ebbfb2000c299a2318",
              ancestorIds: "0,e36e7ee6a7ef11ebbfb2000c299a2318",
              ancestorNames: "dx-a",
              name: "dx",
              childList: null,
            },
            {
              id: "e5603e185f0f11ec94b70242ac140004",
              parentId: "c6689a84ed2111ec8052000c299a2318",
              ancestorIds: "0,c6689a84ed2111ec8052000c299a2318",
              ancestorNames: "dy-a",
              name: "dy",
              childList: null,
            },
            {
              id: "f7dd2f885f0f11ec94b70242ac140004",
              parentId: "146f518fed2311ec8052000c299a2318",
              ancestorIds: "0,146f518fed2311ec8052000c299a2318",
              ancestorNames: "dz-a",
              name: "dz",
              childList: null,
            }
          ],
        },
        {
          id: "e040d925bdbc4fd691bfd17089f61236",
          parentId: null,
          ancestorIds: null,
          ancestorNames: null,
          name: "ee",
          childList: [
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            },
            {
              id: "8fdeb028567546409e325b99fdcd0542",
              parentId: "0905811e732543139e8dba65065b2001",
              ancestorIds:
                "0905811e732543139e8dba65065b2001,8fdeb028567546409e325b99fdcd0542",
              ancestorNames: "ea-b",
              name: "ea",
              childList: null,
            }
          ],
        },
      ],
    };
  },
  watch: {
    isClean(newVal) {
      if (newVal) {
        this.navList = [];
        this.selectLi = [];
      }
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    // 判断是否显示展开按钮
    init() {
      let arr = [];
      console.log(this.$refs.rowValueList.length);
      for (let i = 0; i < this.$refs.rowValueList.length; i++) {
        if (this.$refs.rowValueList[i].clientHeight > 85) {
          arr.push(i);
        }
      }
      this.isOpenList = arr;
    },
    // async getAllQueryTags () {
    //   const res = await getAllQueryTags()
    //   if (res.code === 0) {
    //     const arr = res.data.map(item => {
    //       item.childList = item.childList.map(i => {
    //         i.ancestorNames = i.ancestorNames.split(',').join('-')
    //         return i
    //       })
    //       return item
    //     })
    //     this.filterBoxData = arr
    //   } else {
    //     this.$message.error('筛选列表加载失败...')
    //   }
    // },
    // 右侧多选按钮
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
      this.currentList = [...this.selectLi]
      this.resetscroll(i)
    },
    open(i) {
      // 赋值当前触发行的index 改变样式
      // 先将非当前列的展开样式变为收起,一次只能展开一行 dom元素数组为伪数组因此无法使用map filter
      for (let ii = 0; ii < this.$refs.rowValue.length; ii++) {
        if (ii !== i) {
          // 判断遍历的rowValue是否有展开的样式openRow
          if (this.$refs.rowValue[ii].classList.contains('openRow')) {
            this.$refs.rowValue[ii].classList.remove('openRow')
          }
        }
      }
      // 对当前点击的一行进行样式修改
      this.$refs.rowValue[i].classList.add('openRow')
      // 存储当前行的index给到按钮,来控制展开与收起
      this.openIndex = i
      // 展开的时候将之前的滚动高度置为0
      this.resetscroll(i)
    },
    // 收起
    folded(i) {
      // 去除当前行的展开样式
      this.$refs.rowValue[i].classList.remove('openRow')
      // 将index清空
      this.openIndex = null
    },
    // 点击收起时,将滚动到最上面
    resetscroll(i) {
      this.$nextTick(() => {
        this.$refs.rowList[i].scrollTop = 0
      })
    },
    // 取消按钮
    close() {
      this.selectLi = [...this.currentList]
      this.selectList = []
      this.multipleIndex = ''
    },
    // 单选
    async liClick(item, value) {
      // num 0 单选  1多选
      await this.liSelected(value)
      await this.confirm(item, 0)
    },
    // 点击勾选(多选)
    liSelected(value) {
      // 判断当前是否已勾选
      if (this.selectList.includes(value)) {
        this.selectList = this.selectList.filter((item) => {
          return item !== value
        })

        this.selectLi = this.selectLi.filter((item) => {
          return item !== value
        })
      } else {
        // 当前所选的li高亮的数组
        this.selectLi.push(value)
        // 当前多选的li
        this.selectList.push(value)
      }
    },
    // 数据整理
    organizeData(value, num) {
      if (this.selectList.length === 0) {
        return
      }
      const obj = {
        id: value.id,
        name: value.name,
        selectedList: []
      }
      this.selectList.map((item) => {
        value.childList.filter((i) => {
          if (item === i.id) {
            obj.selectedList.push(i)
          }
        })
      })
       // 判断当前是新增列表还是修改列表
      let currentIndex = null
      const currentArr = this.navList.filter((item, i) => {
        if (item.id === value.id) {
          currentIndex = i
          return item
        }
      })
      // 如果是修改 则去重后重新赋值
      if (currentArr.length > 0) {
        if (num === 0) {
          this.navList[currentIndex].selectedList.push(...obj.selectedList)
        } else {
          this.navList[currentIndex].selectedList = obj.selectedList
        }
        this.navList[currentIndex].selectedList = [...new Set(this.navList[currentIndex].selectedList)]
      } else {
        // 如果是新增则push
        this.navList.push(obj)
      }
      this.selectList = []
    },
    // 多选确定
    confirm(value, num) {
      this.organizeData(value, num)
      // this.close()
      this.multipleIndex = ''
      // this.filterBoxObj()
    },
    // filterBoxObj () {
    //   const obj = {}
    //   console.log(this.navList, 111)
    //   this.navList.map(item => {
    //     const childIdStr = item.selectedList.map(iItem => {
    //         return iItem.id
    //     }).join(',')
    //     switch (item.name) {
    //       case '网络域':
    //         obj['netTagIds'] = childIdStr
    //         break
    //       case '组织机构':
    //         obj['orgTagIds'] = childIdStr
    //         break
    //       case '资产管理员':
    //         obj['personTagIds'] = childIdStr
    //         break
    //       case '资产类型':
    //         obj['categoryIds'] = childIdStr
    //         break
    //       case '操作系统':
    //         obj['operateSystemIds'] = childIdStr
    //         break
    //       case '资产服务':
    //         obj['typeIds'] = childIdStr
    //         break
    //     }
    //   })
    //   this.$emit('filterSelectData', obj)
    // },
    isFold() {
      this.currentType = !this.currentType
    },
    // 删除所选大类
    closeNav(value) {
      const arr = []
      // 删除所选navList
      this.navList = this.navList.filter(item => {
        return item.id !== value.id
      })
      // 清除高亮
      this.navList.map(item => {
        item.selectedList.map(ii => {
          arr.push(ii.id)
        })
      })
      this.selectLi = arr
      this.$nextTick(() => {
        this.filterBoxObj(value)
      })
    }
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
    line-height: 24px;
    font-size: 14px;
    justify-content: space-between;
    .left {
      color: #fff;
      padding-left: 20px;
      background: url("../assets/pathIcon.png") no-repeat 0 2px;
    }
    .center {
      width: calc(100% - 120px - 120px);
      // overflow: hidden;
      .content {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: 0;
      }
      .navlist {
        display: inline-block;
        width: auto;
        position: relative;
        height: 24px;
        line-height: 24px;
        margin-right: 44px;
        border: 1px solid;
        border-image: linear-gradient(180deg, #13d7da 0%, #0060ff 100%) 1 1;
        color: #c4d0f5;
        margin-bottom: 10px;
        cursor: pointer;
        &:hover {
          span {
            z-index: 50;
          }
          // border: 1px solid #1683C8;
          & > .dialog {
            display: block;
            z-index: 40;
          }
        }
        span {
          position: relative;
          display: inline-block;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          padding: 0 35px 0 10px;
          z-index: 30;
          background: url("../assets/icon.png") no-repeat calc(100% - 5px) 8px;
          background-size: 15px;
          // border-bottom: 1px solid #000;
          &:hover {
            color: #01e8fe;
            border-bottom: 1px solid #000;
            background: url("../assets/icon.png") no-repeat calc(100% - 5px) -42px;
            background-size: 15px;
          }
        }
        .dialog {
          display: none;
          position: absolute;
          left: -1px;
          top: 23px;
          width: 400px;
          background: radial-gradient(#060d44, #000b20);
          border: 1px solid;
          border-image-source: linear-gradient(to bottom, #1683c8, #082bb1);
          border-image-slice: 1;
          z-index: 22;
          padding: 20px 0;
          ul {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            padding: 0;
            margin: 0;
            padding-left: 20px;
            li {
              // width: 26%;
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
        .closeNav {
          position: absolute;
          right: -25px;
          top: -1px;
          width: 24px;
          height: 24px;
          background: linear-gradient(90deg, #14d8da, #0060ff);
          i {
            display: inline-block;
            width: 100%;
            height: 100%;
            background: url("../assets/icon.png") no-repeat 5px -132px;
            background-size: 15px;
            &:hover {
              background: url("../assets/icon.png") no-repeat 5px -149px;
              background-size: 15px;
            }
          }
          &:hover {
            & + .dialog {
              display: none;
            }
          }
        }
      }
    }
    .right {
      position: relative;
      width: 100px;
      button {
        position: absolute;
        top: 0px;
        left: 0;
        width: 90px;
        height: 36px;
        float: left;
        border: 1px solid #0060ff;
        background-color: #060d44;
        // background: url('../assets/button.png') no-repeat;
        // background-size: 100% 100%;
        color: #d9e0f8;
        font-size: 14px;
        &:hover {
          color: #01e8fe;
          border: 1px solid #01e8fe;
          // background: url('../assets/hoverButton.png') no-repeat;
          // background-size: 100% 100%;
          // border: none;
        }
        span {
          display: inline-block;
          width: 100%;
          background: url("../assets/icon.png") no-repeat 80% 3px;
          padding-right: 12px;
        }
      }
      .btnOpen {
        span {
          background: url("../assets/icon.png") no-repeat 80% 3px;
          background-size: 15px;
        }
        &:hover {
          span {
            background: url("../assets/icon.png") no-repeat 80% -13px;
            background-size: 15px;
          }
        }
      }
      .btnFold {
        span {
          background: url("../assets/icon.png") no-repeat 80% -30px;
          background-size: 15px;
        }
        &:hover {
          span {
            background: url("../assets/icon.png") no-repeat 80% -46px;
            background-size: 15px;
          }
        }
      }
    }
    padding-top: 10px;
    margin-bottom: 25px;
  }
  .content {
    // background: url('../assets/bottom.png') no-repeat bottom left,
    // url('../assets/top.png') no-repeat top right;
    // background-size: 100%;
    padding: 5px 2px;
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
      padding-left: 20px;
      white-space: nowrap;
      overflow: hidden;
      background-color: #131c64;
      color: #d9e0f8;
    }
    .row-value {
      flex: 1;
      // height: 40px;
      min-height: 40px;
      max-height: 80px;
      background-color: #060d44;
      // max-height: 150px;
      overflow-y: hidden;
      zoom: 1;
      .list {
        height: 100%;
        overflow-y: visible;
      }
      .btn {
        display: none;
      }
      ul {
        // height: 100%;
        padding: 0;
        margin: 0;
        padding-left: 20px;
        &:after {
          content: "";
          display: block;
          clear: both;
          height: 0;
          visibility: hidden;
        }
        li {
          // height: 80%;
          float: left;
          margin-right: 50px;
          text-align: left;
          cursor: pointer;
          color: #697ee4;
          &:hover {
            color: #01e8fe;
          }
        }
        .clickSelected {
          color: #01e8fe;
        }
      }
    }
    .openRow {
      height: auto;
      max-height: 150px;
      .list {
        overflow-y: scroll;
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
        background: url("../assets/icon.png") no-repeat 6px -60px;
        background-size: 15px;
        transition: all 0.3s;
        &:hover {
          background: url("../assets/icon.png") no-repeat 6px -81px;
          background-size: 15px;
        }
      }
      .open {
        padding: 0 20px 0 0;
        left: 30px;
        background: url("../assets/icon.png") no-repeat 88% 8px;
        background-size: 15px;
        &:hover {
          background: url("../assets/icon.png") no-repeat 88% -8px;
          background-size: 15px;
        }
      }
      .folded {
        padding: 0 20px 0 0;
        left: 30px;
        background: url("../assets/icon.png") no-repeat 88% -24px;
        background-size: 15px;
        &:hover {
          background: url("../assets/icon.png") no-repeat 88% -41px;
          background-size: 15px;
        }
      }
    }
  }
  .multiple {
    .row-value {
      position: relative;
      padding-bottom: 45px;
      height: auto;
      max-height: 150px;
      .list {
        padding-bottom: 5px;
        overflow-y: auto;
        &:after {
          content: "";
          display: block;
          clear: both;
          height: 0;
          visibility: hidden;
        }
      }
      .btn {
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 35px;
        // margin: auto;
        .confirm {
          background-color: transparent;
          color: #97abea;
          border: 1px solid #97abea;
          cursor: default;
          opacity: 0.2;
          pointer-events: none;
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
          top: 15px;
          background: url("../assets/icon.png") no-repeat 9999px 9999px;
          background-size: 115%;
          display: inline-block;
          height: 12px;
          width: 12px;
          border: 1px solid #697ee4;
          font-size: 0;
        }
        .selected {
          border-color: #01e8fe;
          background-position: -1px -96px;
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
  line-height: 1;
  cursor: pointer;
  &:hover {
    border: 1px solid #01e8fe;
    color: #01e8fe;
  }
}
.showBtn {
  background-color: transparent;
  color: #97abea;
  pointer-events: auto;
  &:hover {
    background-color: #01e8fe;
    color: #000;
  }
}

// .line:after {
//   content: "";
//   display: block;
//   clear: both;
//   height: 0;
//   visibility: hidden;
// }
// #filterBox {
//   font-size: 12px;
//   width: 100%;
//   background-color: #000b1f;
//   .top {
//     display: flex;
//     height: 34px;
//     line-height: 34px;
//     font-size: 14px;
//     .left {
//       color: #fff;
//       padding-left: 25px;
//       background: url(../assets/pathIcon.png) no-repeat 0 6px;
//       margin-right: 30px;
//     }
//     .center {
//       display: flex;
//       align-items: center;
//       .navlist {
//         position: relative;
//         height: 24px;
//         line-height: 24px;
//         margin-right: 20px;
//         border: 1px solid #0060ff;
//         color: #c4d0f5;
//         cursor: pointer;
//         &:hover {
//           border: 1px solid #01e8fe;
//           & > .dialog {
//               display: block;
//             }
//         }
//         span {
//           position: relative;
//           display: inline-block;
//           width: 100%;
//           height: 100%;
//           box-sizing: border-box;
//           padding: 0 35px 0 10px;
//           z-index: 10;
//           background: url(../assets/icon.png) no-repeat calc(100% - 5px) 8px;
//           background-size: 15px;
//           // border-bottom: 1px solid #000;
//           &:hover {
//             color: #01e8fe;
//             border-bottom: 1px solid #000;
//             background: url(../assets/icon.png) no-repeat calc(100% - 5px) -42px;
//             background-size: 15px;
//           }
//         }
//         .dialog {
//           display: none;
//           position: absolute;
//           left: -1px;
//           top: 23px;
//           width: 340px;
//           background-color: #000b1f;
//           border: 1px solid #01e8fe;
//           z-index: 2;
//           padding: 20px 0;
//           ul {
//             display: flex;
//             flex-wrap: wrap;
//             width: 100%;
//             padding: 0;
//             margin: 0;
//             padding-left: 20px;
//             li {
//               width: 26%;
//               text-align: left;
//               margin-right: 16px;
//               &:hover {
//                 color: #01e8fe;
//               }
//             }
//           }
//           &:hover {
//             display: block;
//             & + span {
//               border-bottom: 1px solid #000;
//             }
//           }
//         }
//       }
//     }
//     padding-top: 10px;
//     margin-bottom: 30px;
//   }
//   .line {
//     border: 1px solid #19268c;
//     border-bottom: none;
//     &:last-child {
//       border: 1px solid #19268c;
//     }
//   }
//   .row {
//     position: relative;
//     width: 100%;
//     line-height: 40px;
//     display: flex;
//     justify-content: space-between;
//     .row-key {
//       width: 100px;
//       padding-left: 10px;
//       white-space: nowrap;
//       overflow: hidden;
//       background-color: #131c64;
//       color: #d9e0f8;
//     }
//     .row-value {
//       flex: 1;
//       // height: 40px;
//       min-height: 40px;
//       max-height: 80px;
//       background-color: #060d44;
//       // max-height: 150px;
//       overflow-y: hidden;
//       zoom: 1;
//       .list {
//         height: 100%;
//         overflow-y: visible;
//       }
//       .btn {
//         display: none;
//       }
//       ul {
//         // height: 100%;
//         padding: 0;
//         margin: 0;
//         padding-left: 20px;
//         &:after {
//           content: "";
//           display: block;
//           clear: both;
//           height: 0;
//           visibility: hidden;
//         }
//         li {
//           // height: 80%;
//           float: left;
//           margin-right: 50px;
//           text-align: left;
//           cursor: pointer;
//           color: #697ee4;
//           &:hover {
//             color: #01e8fe;
//           }
//         }
//         .clickSelected {
//           color: #01e8fe;
//         }
//       }
//     }
//     .openRow {
//       height: auto;
//       max-height: 150px;
//       .list {
//         overflow-y: scroll;
//       }
//     }
//     .row-btn {
//       width: 210px;
//       position: relative;
//       background-color: #060d44;
//       padding-top: 8px;
//       button {
//         position: absolute;
//         right: 30px;
//         height: 25px;
//         width: 70px;
//         padding-left: 20px;
//         background: url(../assets/icon.png) no-repeat 6px -60px;
//         background-size: 15px;
//         transition: all 0.3s;
//         &:hover {
//           background: url(../assets/icon.png) no-repeat 6px -81px;
//           background-size: 15px;
//         }
//       }
//       .open {
//         padding: 0 20px 0 0;
//         left: 30px;
//         background: url(../assets/icon.png) no-repeat 88% 8px;
//         background-size: 15px;
//         &:hover {
//           background: url(../assets/icon.png) no-repeat 88% -8px;
//           background-size: 15px;
//         }
//       }
//       .folded {
//         padding: 0 20px 0 0;
//         left: 30px;
//         background: url(../assets/icon.png) no-repeat 88% -24px;
//         background-size: 15px;
//         &:hover {
//           background: url(../assets/icon.png) no-repeat 88% -41px;
//           background-size: 15px;
//         }
//       }
//     }
//   }
//   .multiple {
//     .row-value {
//       position: relative;
//       height: auto;
//       max-height: 150px;
//       .list {
//         padding-bottom: 5px;
//         overflow-y: auto;
//         &:after {
//           content: "";
//           display: block;
//           clear: both;
//           height: 0;
//           visibility: hidden;
//         }
//       }
//       .btn {
//         display: flex;
//         justify-content: center;
//         width: 100%;
//         height: 35px;
//         // margin: auto;
//         .confirm {
//           background-color: transparent;
//           color: #97abea;
//           border: 1px solid #97abea;
//           cursor: default;
//           opacity: 0.2;
//           pointer-events: none;
//         }
//         .cancel {
//           background: transparent;
//         }
//         button {
//           height: 25px;
//           width: 70px;

//           &:first-child {
//             margin-right: 10px;
//           }
//           &:last-child {
//             margin-left: 10px;
//           }
//         }
//       }
//       ul li {
//         position: relative;
//         padding-left: 18px;
//         margin-right: 32px;
//         cursor: pointer;
//         user-select: none;
//         color: #697ee4;
//         i {
//           position: absolute;
//           left: 0;
//           top: 11px;
//           background: url(../assets/icon.png) no-repeat 9999px 9999px;
//           background-size: 100%;
//           display: inline-block;
//           height: 12px;
//           width: 12px;
//           border: 1px solid #697ee4;
//           font-size: 0;
//         }
//         .selected {
//           border-color: #01e8fe;
//           background-position: 0px -96px;
//         }
//       }
//     }
//     .row-btn {
//       width: 210px;
//       button {
//         display: none;
//       }
//     }
//   }
// }
// ul {
//   list-style: none;
//   user-select: none;
// }
// button {
//   border: 1px solid #0060ff;
//   color: #97abea;
//   font-size: 12px;
//   cursor: pointer;
//   &:hover {
//     border: 1px solid #01e8fe;
//     color: #01e8fe;
//   }
// }
// .showBtn {
//   background-color: transparent;
//   color: #97abea;
//   pointer-events: auto;
//   &:hover {
//     background-color: #01e8fe;
//     color: #000;
//   }
// }
</style>
