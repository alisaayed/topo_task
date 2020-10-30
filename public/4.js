(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Groups.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Groups.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      groupsList: [],
      switchView: false,
      groupName: '',
      groupIndex: 0,
      usersInGroup: [],
      allUsers: [],
      selected: undefined
    };
  },
  computed: {
    getToken: function getToken() {
      return this.$store.getters.token;
    },
    getUsersNotiN: function getUsersNotiN() {
      var _this = this;

      return this.allUsers.filter(function (x) {
        return !_this.getUsersId.includes(x.id);
      }).map(function (item) {
        return {
          value: item.id,
          text: item.email
        };
      });
    },
    getUsersId: function getUsersId() {
      return this.usersInGroup.map(function (x) {
        return x.id;
      });
    },
    getUserSelceted: function getUserSelceted() {
      return this.getUsersNotiN.find;
    }
  },
  created: function created() {
    var _this2 = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://localhost:8000/api/group', {
      headers: {
        'Authorization': "Bearer ".concat(this.getToken)
      }
    }).then(function (res) {
      return _this2.groupsList = res.data;
    });
  },
  methods: {
    addGroup: function addGroup() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('http://localhost:8000/api/group', {
        name: this.groupName
      }, {
        headers: {
          'Authorization': "Bearer ".concat(this.getToken)
        }
      }).then(function (res) {
        _this3.groupsList.push(res.data);

        _this3.groupName = '';
      });
    },
    deleteGroup: function deleteGroup($index) {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]('http://localhost:8000/api/group/' + this.groupsList[$index].id, {
        headers: {
          'Authorization': "Bearer ".concat(this.getToken)
        }
      }).then(function (res) {
        _this4.groupsList.splice($index, 1);
      });
    },
    viewGroup: function viewGroup($index) {
      var _this5 = this;

      this.switchView = true;
      this.groupIndex = $index; //

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://localhost:8000/api/group/' + this.groupsList[$index].id + '/user', {
        headers: {
          'Authorization': "Bearer ".concat(this.getToken)
        }
      }).then(function (res) {
        return _this5.usersInGroup = res.data.map(function (item) {
          return {
            id: item.id,
            email: item.email
          };
        });
      }); //

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://localhost:8000/api/user', {
        headers: {
          'Authorization': "Bearer ".concat(this.getToken)
        }
      }).then(function (res) {
        return _this5.allUsers = res.data.map(function (item) {
          return {
            id: item.id,
            email: item.email
          };
        });
      });
    },
    deleteUserFromGroup: function deleteUserFromGroup($index) {
      var _this6 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]('http://localhost:8000/api/group/' + this.groupsList[this.groupIndex].id + '/user/' + this.usersInGroup[$index].id, {
        headers: {
          'Authorization': "Bearer ".concat(this.getToken)
        }
      }).then(function (res) {
        _this6.usersInGroup.splice($index, 1);
      });
    },
    addUserToGroup: function addUserToGroup() {
      var _this7 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put('http://localhost:8000/api/group/' + this.groupsList[this.groupIndex].id + '/user/' + this.selected, {}, {
        headers: {
          'Authorization': "Bearer ".concat(this.getToken),
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://localhost:8000/api/group/' + _this7.groupsList[_this7.groupIndex].id + '/user', {
          headers: {
            'Authorization': "Bearer ".concat(_this7.getToken)
          }
        }).then(function (res) {
          return _this7.usersInGroup = res.data.map(function (item) {
            return {
              id: item.id,
              email: item.email
            };
          });
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Groups.vue?vue&type=template&id=70070402&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Groups.vue?vue&type=template&id=70070402& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    !_vm.switchView
      ? _c(
          "div",
          [
            _c(
              "b-button",
              {
                attrs: { variant: "outline-primary" },
                on: { click: _vm.addGroup }
              },
              [_vm._v("Add Group")]
            ),
            _vm._v(" "),
            _c("b-input", {
              staticClass: "mb-2 mr-sm-2 mb-sm-0",
              attrs: { placeholder: "Group Name" },
              model: {
                value: _vm.groupName,
                callback: function($$v) {
                  _vm.groupName = $$v
                },
                expression: "groupName"
              }
            }),
            _vm._v(" "),
            _c("h1", [_vm._v("Groups List")]),
            _vm._v(" "),
            _c(
              "b-list-group",
              _vm._l(_vm.groupsList, function(item, index) {
                return _c(
                  "b-list-group-item",
                  {
                    key: item.id,
                    attrs: { button: "" },
                    on: {
                      click: function($event) {
                        return _vm.viewGroup(index)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n            " + _vm._s(item.name) + " \n            "
                    ),
                    _c(
                      "b-button",
                      {
                        on: {
                          click: function($event) {
                            return _vm.deleteGroup(index)
                          }
                        }
                      },
                      [
                        _c("b-icon", {
                          attrs: { icon: "x-square-fill", variant: "danger" }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              }),
              1
            )
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.switchView
      ? _c(
          "div",
          [
            _c("h1", [_vm._v(_vm._s(_vm.groupsList[_vm.groupIndex].name))]),
            _vm._v(" "),
            _c(
              "b-list-group",
              _vm._l(_vm.usersInGroup, function(item, index) {
                return _c(
                  "b-list-group-item",
                  { key: item.id },
                  [
                    _vm._v(
                      "\n               " +
                        _vm._s(item.email) +
                        "\n               "
                    ),
                    _c(
                      "b-button",
                      {
                        on: {
                          click: function($event) {
                            return _vm.deleteUserFromGroup(index)
                          }
                        }
                      },
                      [
                        _c("b-icon", {
                          attrs: { icon: "x-square-fill", variant: "danger" }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              }),
              1
            ),
            _vm._v(" "),
            _c("br"),
            _c("br"),
            _vm._v(" "),
            _c("h2", [_vm._v("add user")]),
            _vm._v(" "),
            _c("b-form-select", {
              attrs: { options: _vm.getUsersNotiN },
              model: {
                value: _vm.selected,
                callback: function($$v) {
                  _vm.selected = $$v
                },
                expression: "selected"
              }
            }),
            _vm._v(" "),
            _c("b-button", { on: { click: _vm.addUserToGroup } }, [
              _vm._v("Add user")
            ])
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Groups.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Groups.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Groups_vue_vue_type_template_id_70070402___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Groups.vue?vue&type=template&id=70070402& */ "./resources/js/components/Groups.vue?vue&type=template&id=70070402&");
/* harmony import */ var _Groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Groups.vue?vue&type=script&lang=js& */ "./resources/js/components/Groups.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Groups_vue_vue_type_template_id_70070402___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Groups_vue_vue_type_template_id_70070402___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Groups.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Groups.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Groups.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Groups.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Groups.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Groups.vue?vue&type=template&id=70070402&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Groups.vue?vue&type=template&id=70070402& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Groups_vue_vue_type_template_id_70070402___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Groups.vue?vue&type=template&id=70070402& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Groups.vue?vue&type=template&id=70070402&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Groups_vue_vue_type_template_id_70070402___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Groups_vue_vue_type_template_id_70070402___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);