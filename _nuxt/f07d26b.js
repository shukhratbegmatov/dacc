(window.webpackJsonp=window.webpackJsonp||[]).push([[13,2,3],{377:function(t,e,l){"use strict";l.r(e);var n={name:"IndexPage",data:function(){return{footer:[],componey_info:[],footer1:[]}},mounted:function(){var t=this;this.$axios.$get("footer/",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){t.footer=e.menus[0],t.footer1=e.menus[3],t.componey_info=e.company_info[0]}))}},C=l(75),component=Object(C.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m_footer"},[e("footer",[e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6"},[e("div",[e("img",{attrs:{src:t.componey_info.logo_url,alt:""}})]),t._v(" "),e("div",{staticClass:"footer_description"},[t._v("\n            "+t._s(t.componey_info.short_description)+"\n          ")]),t._v(" "),e("div",{staticClass:"footer_messanger"},[e("div",{staticClass:"f_links"},[e("a",{attrs:{href:"#"}},[e("svg",{attrs:{width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M18.5526 0.997069C18.3006 1.00879 18.0633 1.08203 17.8524 1.16406H17.8494C17.6356 1.24902 16.619 1.67676 15.075 2.32422C13.5311 2.97461 11.5272 3.81836 9.53791 4.65625C5.56526 6.3291 1.65999 7.97558 1.65999 7.97558L1.70686 7.95801C1.70686 7.95801 1.43733 8.0459 1.15608 8.23926C1.01252 8.33301 0.854321 8.46191 0.716626 8.66406C0.578931 8.86621 0.467602 9.17676 0.508618 9.49609C0.576001 10.0381 0.927564 10.3633 1.17952 10.542C1.4344 10.7236 1.67756 10.8086 1.67756 10.8086H1.68342L5.34553 12.042C5.50959 12.5693 6.46174 15.6982 6.69026 16.4189C6.82502 16.8496 6.95686 17.1191 7.12092 17.3242C7.20002 17.4297 7.29377 17.5176 7.4051 17.5879C7.44905 17.6143 7.49592 17.6348 7.5428 17.6523C7.55745 17.6611 7.57209 17.6641 7.58967 17.667L7.55159 17.6582C7.5633 17.6611 7.57209 17.6699 7.58088 17.6728C7.61018 17.6816 7.63069 17.6846 7.66877 17.6904C8.24885 17.8662 8.71467 17.5059 8.71467 17.5059L8.74104 17.4853L10.9031 15.5166L14.5272 18.2969L14.6092 18.332C15.3651 18.6631 16.1297 18.4785 16.534 18.1533C16.9412 17.8252 17.0994 17.4062 17.0994 17.4062L17.1258 17.3389L19.9266 2.99219C20.0057 2.63769 20.0262 2.30664 19.9383 1.98437C19.8504 1.66211 19.6248 1.36035 19.3524 1.19922C19.077 1.03515 18.8045 0.98535 18.5526 0.997069ZM18.4764 2.53515C18.4735 2.58203 18.4823 2.57617 18.4617 2.66699V2.67578L15.6873 16.873C15.6756 16.8936 15.6551 16.9375 15.5994 16.9814C15.5408 17.0283 15.494 17.0576 15.2508 16.9609L10.8182 13.5625L8.14045 16.0029L8.70295 12.4111C8.70295 12.4111 15.6463 5.93945 15.9451 5.66113C16.244 5.38281 16.1444 5.32422 16.1444 5.32422C16.1649 4.98437 15.6932 5.22461 15.6932 5.22461L6.56135 10.8818L6.55842 10.8672L2.18147 9.39355V9.39062C2.17854 9.39062 2.17268 9.38769 2.16975 9.38769C2.17268 9.38769 2.19319 9.3789 2.19319 9.3789L2.21663 9.36719L2.24006 9.3584C2.24006 9.3584 6.14827 7.71191 10.1209 6.03906C12.1102 5.20117 14.1141 4.35742 15.6551 3.70703C17.1961 3.05957 18.3358 2.58496 18.4002 2.55859C18.4617 2.53515 18.4324 2.53515 18.4764 2.53515Z",fill:"white"}})])])]),t._v(" "),e("div",{staticClass:"f_links"},[e("a",{attrs:{href:"#"}},[e("svg",{attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M5.60156 0.75C2.93848 0.75 0.75 2.93555 0.75 5.60156V12.3984C0.75 15.0615 2.93555 17.25 5.60156 17.25H12.3984C15.0615 17.25 17.25 15.0645 17.25 12.3984V5.60156C17.25 2.93848 15.0645 0.75 12.3984 0.75H5.60156ZM5.60156 2.25H12.3984C14.2529 2.25 15.75 3.74707 15.75 5.60156V12.3984C15.75 14.2529 14.2529 15.75 12.3984 15.75H5.60156C3.74707 15.75 2.25 14.2529 2.25 12.3984V5.60156C2.25 3.74707 3.74707 2.25 5.60156 2.25ZM13.4297 3.89062C13.0518 3.89062 12.75 4.19238 12.75 4.57031C12.75 4.94824 13.0518 5.25 13.4297 5.25C13.8076 5.25 14.1094 4.94824 14.1094 4.57031C14.1094 4.19238 13.8076 3.89062 13.4297 3.89062ZM9 4.5C6.52441 4.5 4.5 6.52441 4.5 9C4.5 11.4756 6.52441 13.5 9 13.5C11.4756 13.5 13.5 11.4756 13.5 9C13.5 6.52441 11.4756 4.5 9 4.5ZM9 6C10.667 6 12 7.33301 12 9C12 10.667 10.667 12 9 12C7.33301 12 6 10.667 6 9C6 7.33301 7.33301 6 9 6Z",fill:"white"}})])])]),t._v(" "),e("div",{staticClass:"f_links"},[e("a",{attrs:{href:"#"}},[e("svg",{attrs:{width:"12",height:"22",viewBox:"0 0 12 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M8.44043 0.5C5.48393 0.5 3.75 2.06163 3.75 5.61963V8.75H0V12.5H3.75V21.5H7.5V12.5H10.5L11.25 8.75H7.5V6.25391C7.5 4.91366 7.93707 4.25 9.19482 4.25H11.25V0.653809C10.8945 0.605809 9.85868 0.5 8.44043 0.5Z",fill:"white"}})])])]),t._v(" "),e("div",{staticClass:"f_links"},[e("a",{attrs:{href:"#"}},[e("svg",{attrs:{width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M10 0.5C7.17578 0.5 4.67969 0.792969 3.15625 1.01562C1.89648 1.2002 0.879883 2.14941 0.648438 3.40625C0.452148 4.47559 0.25 6.04004 0.25 8C0.25 9.95996 0.452148 11.5244 0.648438 12.5938C0.879883 13.8506 1.89648 14.8027 3.15625 14.9844C4.68555 15.207 7.19043 15.5 10 15.5C12.8096 15.5 15.3145 15.207 16.8438 14.9844C18.1035 14.8027 19.1201 13.8506 19.3516 12.5938C19.5479 11.5215 19.75 9.9541 19.75 8C19.75 6.0459 19.5508 4.47852 19.3516 3.40625C19.1201 2.14941 18.1035 1.2002 16.8438 1.01562C15.3203 0.792969 12.8242 0.5 10 0.5ZM10 2C12.7246 2 15.1592 2.27832 16.6328 2.49219C17.2656 2.58594 17.7607 3.06348 17.875 3.6875C18.0566 4.67773 18.25 6.14551 18.25 8C18.25 9.85156 18.0566 11.3223 17.875 12.3125C17.7607 12.9365 17.2686 13.417 16.6328 13.5078C15.1533 13.7217 12.707 14 10 14C7.29297 14 4.84375 13.7217 3.36719 13.5078C2.73438 13.417 2.23926 12.9365 2.125 12.3125C1.94336 11.3223 1.75 9.85742 1.75 8C1.75 6.13965 1.94336 4.67773 2.125 3.6875C2.23926 3.06348 2.73145 2.58594 3.36719 2.49219C4.83789 2.27832 7.27539 2 10 2ZM7.75 3.71094V12.2891L8.875 11.6562L14.125 8.65625L15.25 8L14.125 7.34375L8.875 4.34375L7.75 3.71094ZM9.25 6.28906L12.2266 8L9.25 9.71094V6.28906Z",fill:"white"}})])])])])]),t._v(" "),e("div",{staticClass:"col-xl-6"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-3"},[e("div",{staticClass:"f_head"},[t._v(t._s(t.footer.title))]),t._v(" "),t._l(t.footer.child,(function(l){return e("div",{staticClass:"f_links_m"},[e("NuxtLink",{attrs:{to:t.localePath("/".concat(l.url))}},[t._v("\n                  "+t._s(l.title)+"\n                ")])],1)}))],2),t._v(" "),e("div",{staticClass:"col-xl-4"},[e("div",{staticClass:"f_head"},[t._v(t._s(t.footer1.title))]),t._v(" "),t._l(t.footer1.child,(function(l){return e("div",{staticClass:"f_links_m"},[e("NuxtLink",{attrs:{to:t.localePath("/".concat(l.url))}},[t._v("\n                  "+t._s(l.title)+"\n                ")])],1)}))],2),t._v(" "),t._m(0)])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-xl-5"},[e("div",{staticClass:"footer_cards"},[e("div",{staticClass:"f_tel"},[t._v("Telefon: +998 99 123 45 67")]),t._v(" "),e("div",{staticClass:"f_email"},[t._v("E-mail:Dacc@gmail.com")]),t._v(" "),e("div",{staticClass:"f_address"},[t._v("Manzil: Toshkent shahri, Abdulla Qodiriy ko’chasi 2 uy 10007")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:l(377).default})},378:function(t,e,l){"use strict";l.r(e);l(22),l(2),l(1);var n={data:function(){return{isActive:!1,menu:[],isOpen:!1,logo:{}}},mounted:function(){var t=this;this.$axios.$get("main-page/",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){t.menu=e.menu,t.logo=e.site}))},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},C=l(75),component=Object(C.a)(n,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"navbar_main"},[e("div",{staticClass:"mobile_menu",class:{show:t.isOpen}},[e("ul",{staticClass:"nav"},t._l(t.menu,(function(l,n){return e("li",{key:n,staticClass:"nav-item"},[e("a",{staticClass:"nav-link"},[t._v(t._s(l.title))]),t._v(" "),e("ul",{staticClass:"child_menu z_index1"},t._l(l.child,(function(l,n){return e("li",{key:n},[e("NuxtLink",{attrs:{to:t.localePath("/".concat(l.url))}},[t._v(t._s(l.title))])],1)})),0)])})),0)]),t._v(" "),e("div",{staticClass:"nav_brand"},[e("NuxtLink",{attrs:{to:t.localePath("/")}},[e("img",{attrs:{src:t.logo.logo_url,alt:""}})])],1),t._v(" "),e("div",{staticClass:"navbar_border"}),t._v(" "),e("div",{staticClass:"navbar_bottom_border"}),t._v(" "),e("div",{staticClass:"nav_links"},[e("ul",{staticClass:"nav"},t._l(t.menu,(function(l,n){return e("li",{key:n,staticClass:"nav-item"},[e("NuxtLink",{staticClass:"nav-link",attrs:{to:t.localePath("/".concat(l.url))}},[t._v(t._s(l.title)+"  ")]),t._v(" "),0!=l.child.length?e("ul",{staticClass:"child_menu z_index1"},t._l(l.child,(function(l,n){return e("li",{key:n},[e("NuxtLink",{attrs:{to:t.localePath("/".concat(l.url))}},[t._v(t._s(l.title))])],1)})),0):t._e()],1)})),0)]),t._v(" "),e("div",{staticClass:"main_language"},[e("button",{on:{click:function(e){t.isActive=!t.isActive}}},[e("svg",{attrs:{width:"15",height:"14",viewBox:"0 0 15 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.25225 13.75C11.2549 13.75 14.4996 10.7279 14.4996 7C14.4996 3.27208 11.2549 0.25 7.25225 0.25C3.24964 0.25 0.00488281 3.27208 0.00488281 7C0.00488281 10.7279 3.24964 13.75 7.25225 13.75ZM9.51142 11.8114C11.3774 11.0502 12.7158 9.37499 12.8735 7.39374C12.2108 7.73038 11.3752 8.00636 10.4227 8.19847C10.3028 9.60074 9.97622 10.8528 9.51142 11.8114ZM4.99308 2.18865C3.42503 2.82824 2.22962 4.1133 1.79424 5.68301C1.98076 5.84783 2.29838 6.05054 2.78169 6.25061C3.14311 6.40021 3.56457 6.53483 4.03552 6.64731C4.07833 4.90436 4.43664 3.33617 4.99308 2.18865ZM5.72273 8.43307C5.84893 9.52562 6.11295 10.4651 6.44634 11.1638C6.68312 11.66 6.92335 11.9686 7.10875 12.133C7.17468 12.1914 7.22241 12.2226 7.25225 12.2386C7.28209 12.2226 7.32982 12.1914 7.39576 12.133C7.58116 11.9686 7.82138 11.66 8.05816 11.1638C8.39155 10.4651 8.65558 9.52562 8.78177 8.43307C8.28869 8.47692 7.77699 8.5 7.25226 8.5C6.72752 8.5 6.21581 8.47692 5.72273 8.43307ZM4.08182 8.19847C4.20172 9.60073 4.52828 10.8528 4.99309 11.8114C3.12705 11.0502 1.78874 9.37499 1.63102 7.39373C2.29369 7.73037 3.12931 8.00636 4.08182 8.19847ZM8.86251 6.9172C8.35469 6.97065 7.81534 7 7.25226 7C6.68917 7 6.14982 6.97065 5.64199 6.9172C5.65257 5.24806 5.98225 3.80878 6.44634 2.83624C6.68312 2.34005 6.92335 2.03137 7.10875 1.86704C7.17469 1.80859 7.22241 1.77744 7.25225 1.76137C7.28209 1.77744 7.32982 1.80859 7.39576 1.86704C7.58116 2.03137 7.82138 2.34005 8.05816 2.83624C8.52225 3.80878 8.85193 5.24806 8.86251 6.9172ZM10.469 6.64731C10.4262 4.90437 10.0679 3.33617 9.51142 2.18865C11.0795 2.82824 12.2749 4.1133 12.7103 5.68301C12.5237 5.84784 12.2061 6.05055 11.7228 6.25061C11.3614 6.40022 10.9399 6.53483 10.469 6.64731Z",fill:"white"}})]),t._v(" "),"uz"==t.$i18n.locale?e("span",[t._v("O'zbek")]):t._e(),t._v(" "),"ru"==t.$i18n.locale?e("span",[t._v("Рус")]):t._e(),t._v(" "),"en"==t.$i18n.locale?e("span",[t._v("English")]):t._e()]),t._v(" "),t.isActive?e("div",[e("div",{staticClass:"lang_menu"},[e("div",{staticClass:"list_lang"},t._l(t.availableLocales,(function(l){return e("div",{key:l.code},[e("NuxtLink",{attrs:{to:t.switchLocalePath(l.code)}},[t._v(t._s(l.name))])],1)})),0)])]):t._e()]),t._v(" "),e("div",{staticClass:"hambur"},[e("div",{class:{open:t.isOpen},attrs:{id:"nav-icon2"},on:{click:function(e){t.isOpen=!t.isOpen}}},[e("span"),t._v(" "),e("span"),t._v(" "),e("span"),t._v(" "),e("span"),t._v(" "),e("span"),t._v(" "),e("span")])])])}),[],!1,null,null,null);e.default=component.exports},385:function(t,e,l){"use strict";l.r(e);l(22);var n={name:"IndexPage",data:function(){return{contacts:[]}},mounted:function(){var t=this;this.$axios.$get("contact/",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){t.contacts=e[0]}))}},C=l(75),component=Object(C.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"test_rejm"},[e("marquee",[t._v(t._s(t.$t("test")))])],1),t._v(" "),e("div",{staticClass:"managements port_fo"},[e("div",{staticClass:"cards_one_f"},[e("div",[e("div",{staticClass:"cards_one"},[e("Navbar"),t._v(" "),e("div",{staticClass:"nav_left_container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6"},[e("div",{staticClass:"main_text"},[t._v("\n            Контакты\n          ")]),t._v(" "),e("div",{staticClass:"contact_messenger"},[e("div",{staticClass:"f_linkss"},[e("a",{attrs:{href:"#"}},[e("svg",{attrs:{width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M18.5526 0.997069C18.3006 1.00879 18.0633 1.08203 17.8524 1.16406H17.8494C17.6356 1.24902 16.619 1.67676 15.075 2.32422C13.5311 2.97461 11.5272 3.81836 9.53791 4.65625C5.56526 6.3291 1.65999 7.97558 1.65999 7.97558L1.70686 7.95801C1.70686 7.95801 1.43733 8.0459 1.15608 8.23926C1.01252 8.33301 0.854321 8.46191 0.716626 8.66406C0.578931 8.86621 0.467602 9.17676 0.508618 9.49609C0.576001 10.0381 0.927564 10.3633 1.17952 10.542C1.4344 10.7236 1.67756 10.8086 1.67756 10.8086H1.68342L5.34553 12.042C5.50959 12.5693 6.46174 15.6982 6.69026 16.4189C6.82502 16.8496 6.95686 17.1191 7.12092 17.3242C7.20002 17.4297 7.29377 17.5176 7.4051 17.5879C7.44905 17.6143 7.49592 17.6348 7.5428 17.6523C7.55745 17.6611 7.57209 17.6641 7.58967 17.667L7.55159 17.6582C7.5633 17.6611 7.57209 17.6699 7.58088 17.6728C7.61018 17.6816 7.63069 17.6846 7.66877 17.6904C8.24885 17.8662 8.71467 17.5059 8.71467 17.5059L8.74104 17.4853L10.9031 15.5166L14.5272 18.2969L14.6092 18.332C15.3651 18.6631 16.1297 18.4785 16.534 18.1533C16.9412 17.8252 17.0994 17.4062 17.0994 17.4062L17.1258 17.3389L19.9266 2.99219C20.0057 2.63769 20.0262 2.30664 19.9383 1.98437C19.8504 1.66211 19.6248 1.36035 19.3524 1.19922C19.077 1.03515 18.8045 0.98535 18.5526 0.997069ZM18.4764 2.53515C18.4735 2.58203 18.4823 2.57617 18.4617 2.66699V2.67578L15.6873 16.873C15.6756 16.8936 15.6551 16.9375 15.5994 16.9814C15.5408 17.0283 15.494 17.0576 15.2508 16.9609L10.8182 13.5625L8.14045 16.0029L8.70295 12.4111C8.70295 12.4111 15.6463 5.93945 15.9451 5.66113C16.244 5.38281 16.1444 5.32422 16.1444 5.32422C16.1649 4.98437 15.6932 5.22461 15.6932 5.22461L6.56135 10.8818L6.55842 10.8672L2.18147 9.39355V9.39062C2.17854 9.39062 2.17268 9.38769 2.16975 9.38769C2.17268 9.38769 2.19319 9.3789 2.19319 9.3789L2.21663 9.36719L2.24006 9.3584C2.24006 9.3584 6.14827 7.71191 10.1209 6.03906C12.1102 5.20117 14.1141 4.35742 15.6551 3.70703C17.1961 3.05957 18.3358 2.58496 18.4002 2.55859C18.4617 2.53515 18.4324 2.53515 18.4764 2.53515Z",fill:"white"}})])])]),t._v(" "),e("div",{staticClass:"f_linkss"},[e("a",{attrs:{href:"#"}},[e("svg",{attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M5.60156 0.75C2.93848 0.75 0.75 2.93555 0.75 5.60156V12.3984C0.75 15.0615 2.93555 17.25 5.60156 17.25H12.3984C15.0615 17.25 17.25 15.0645 17.25 12.3984V5.60156C17.25 2.93848 15.0645 0.75 12.3984 0.75H5.60156ZM5.60156 2.25H12.3984C14.2529 2.25 15.75 3.74707 15.75 5.60156V12.3984C15.75 14.2529 14.2529 15.75 12.3984 15.75H5.60156C3.74707 15.75 2.25 14.2529 2.25 12.3984V5.60156C2.25 3.74707 3.74707 2.25 5.60156 2.25ZM13.4297 3.89062C13.0518 3.89062 12.75 4.19238 12.75 4.57031C12.75 4.94824 13.0518 5.25 13.4297 5.25C13.8076 5.25 14.1094 4.94824 14.1094 4.57031C14.1094 4.19238 13.8076 3.89062 13.4297 3.89062ZM9 4.5C6.52441 4.5 4.5 6.52441 4.5 9C4.5 11.4756 6.52441 13.5 9 13.5C11.4756 13.5 13.5 11.4756 13.5 9C13.5 6.52441 11.4756 4.5 9 4.5ZM9 6C10.667 6 12 7.33301 12 9C12 10.667 10.667 12 9 12C7.33301 12 6 10.667 6 9C6 7.33301 7.33301 6 9 6Z",fill:"white"}})])])]),t._v(" "),e("div",{staticClass:"f_linkss"},[e("a",{attrs:{href:"#"}},[e("svg",{attrs:{width:"12",height:"22",viewBox:"0 0 12 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M8.44043 0.5C5.48393 0.5 3.75 2.06163 3.75 5.61963V8.75H0V12.5H3.75V21.5H7.5V12.5H10.5L11.25 8.75H7.5V6.25391C7.5 4.91366 7.93707 4.25 9.19482 4.25H11.25V0.653809C10.8945 0.605809 9.85868 0.5 8.44043 0.5Z",fill:"white"}})])])]),t._v(" "),e("div",{staticClass:"f_linkss"},[e("a",{attrs:{href:"#"}},[e("svg",{attrs:{width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M10 0.5C7.17578 0.5 4.67969 0.792969 3.15625 1.01562C1.89648 1.2002 0.879883 2.14941 0.648438 3.40625C0.452148 4.47559 0.25 6.04004 0.25 8C0.25 9.95996 0.452148 11.5244 0.648438 12.5938C0.879883 13.8506 1.89648 14.8027 3.15625 14.9844C4.68555 15.207 7.19043 15.5 10 15.5C12.8096 15.5 15.3145 15.207 16.8438 14.9844C18.1035 14.8027 19.1201 13.8506 19.3516 12.5938C19.5479 11.5215 19.75 9.9541 19.75 8C19.75 6.0459 19.5508 4.47852 19.3516 3.40625C19.1201 2.14941 18.1035 1.2002 16.8438 1.01562C15.3203 0.792969 12.8242 0.5 10 0.5ZM10 2C12.7246 2 15.1592 2.27832 16.6328 2.49219C17.2656 2.58594 17.7607 3.06348 17.875 3.6875C18.0566 4.67773 18.25 6.14551 18.25 8C18.25 9.85156 18.0566 11.3223 17.875 12.3125C17.7607 12.9365 17.2686 13.417 16.6328 13.5078C15.1533 13.7217 12.707 14 10 14C7.29297 14 4.84375 13.7217 3.36719 13.5078C2.73438 13.417 2.23926 12.9365 2.125 12.3125C1.94336 11.3223 1.75 9.85742 1.75 8C1.75 6.13965 1.94336 4.67773 2.125 3.6875C2.23926 3.06348 2.73145 2.58594 3.36719 2.49219C4.83789 2.27832 7.27539 2 10 2ZM7.75 3.71094V12.2891L8.875 11.6562L14.125 8.65625L15.25 8L14.125 7.34375L8.875 4.34375L7.75 3.71094ZM9.25 6.28906L12.2266 8L9.25 9.71094V6.28906Z",fill:"white"}})])])])])])])])],1),t._v(" "),e("div",{staticClass:"manage_f"},[e("section",[e("div",{staticClass:"row cards_one"},[e("div",{staticClass:"col-xl-6"},[e("div",{staticClass:"phone_link"},[e("div",{staticClass:"ph_icon"},[e("svg",{attrs:{width:"24",height:"23",viewBox:"0 0 24 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M18.4873 22.6267C18.2631 22.626 18.0396 22.6015 17.8206 22.5533C13.6517 21.6909 9.81104 19.6689 6.74064 16.72C3.73575 13.7646 1.6517 10.0017 0.740638 5.88667C0.633212 5.37381 0.659579 4.84193 0.817201 4.34221C0.974823 3.84249 1.2584 3.39175 1.64064 3.03334L4.3073 0.46667C4.44351 0.337862 4.60534 0.239223 4.78225 0.177192C4.95915 0.11516 5.14715 0.0911304 5.33397 0.10667C5.52768 0.126879 5.71461 0.189279 5.88162 0.289483C6.04862 0.389686 6.19165 0.52526 6.30064 0.68667L9.63397 5.61334C9.75897 5.8045 9.81931 6.03074 9.80611 6.25876C9.79291 6.48678 9.70686 6.70454 9.56064 6.88L7.8873 8.88C8.55374 10.355 9.49753 11.6881 10.6673 12.8067C11.8295 13.9659 13.2032 14.8915 14.714 15.5333L16.7873 13.8867C16.9614 13.749 17.1733 13.6677 17.3948 13.6534C17.6163 13.6391 17.8369 13.6926 18.0273 13.8067L23.0606 17.06C23.2334 17.1631 23.3805 17.304 23.4911 17.4721C23.6016 17.6402 23.6727 17.8311 23.699 18.0305C23.7253 18.23 23.7061 18.4328 23.6429 18.6238C23.5797 18.8148 23.4741 18.989 23.334 19.1333L20.734 21.7067C20.4386 22.0006 20.0881 22.2331 19.7025 22.391C19.3169 22.5489 18.9039 22.629 18.4873 22.6267ZM5.2273 1.42667L2.56064 3.99334C2.34561 4.1937 2.18643 4.44659 2.09876 4.72713C2.01109 5.00766 1.99796 5.30618 2.06064 5.59334C2.90779 9.45476 4.85512 12.9882 7.6673 15.7667C10.5568 18.541 14.171 20.4429 18.094 21.2533C18.3909 21.3154 18.6986 21.3028 18.9895 21.2167C19.2804 21.1306 19.5453 20.9737 19.7606 20.76L22.3606 18.1867L17.5006 15.0467L15.274 16.82C15.1887 16.8875 15.0883 16.9331 14.9814 16.9528C14.8745 16.9726 14.7644 16.9659 14.6606 16.9333C12.8118 16.2521 11.1363 15.1708 9.75397 13.7667C8.32421 12.4315 7.21439 10.7907 6.5073 8.96667C6.47739 8.85625 6.4764 8.73998 6.50442 8.62906C6.53244 8.51815 6.58853 8.4163 6.6673 8.33334L8.4673 6.18L5.2273 1.42667Z",fill:"#0F054C"}})])]),t._v(" "),e("div",{staticClass:"phone_number"},[t._v("\n            "+t._s(t.contacts.phone_number)+"\n          ")])]),t._v(" "),e("div",{staticClass:"phone_link"},[e("div",{staticClass:"ph_icon"},[e("svg",{attrs:{width:"16",height:"24",viewBox:"0 0 16 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M8 11.25C9.65685 11.25 11 9.90685 11 8.25C11 6.59315 9.65685 5.25 8 5.25C6.34315 5.25 5 6.59315 5 8.25C5 9.90685 6.34315 11.25 8 11.25Z",stroke:"#0F054C","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M14.0007 11.25C11.7507 16.5 8.00067 22.5 8.00067 22.5C8.00067 22.5 4.25067 16.5 2.00067 11.25C-0.249328 6 3.50067 1.5 8.00067 1.5C12.5007 1.5 16.2507 6 14.0007 11.25Z",stroke:"#0F054C","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),e("div",{staticClass:"phone_number"},[t._v("\n           "+t._s(t.contacts.email_address)+"\n          ")])]),t._v(" "),e("div",{staticClass:"phone_link"},[e("div",{staticClass:"ph_icon"},[e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{"clip-path":"url(#clip0_266_4353)"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 1.08571C5.376 1.08571 0 6.20571 0 12.5143C0 18.8229 5.376 23.9429 12 23.9429H18V21.6571H12C6.792 21.6571 2.4 17.4743 2.4 12.5143C2.4 7.55428 6.792 3.37142 12 3.37142C17.208 3.37142 21.6 7.55428 21.6 12.5143V14.1486C21.6 15.0514 20.748 15.9429 19.8 15.9429C18.852 15.9429 18 15.0514 18 14.1486V12.5143C18 9.35999 15.312 6.79999 12 6.79999C8.688 6.79999 6 9.35999 6 12.5143C6 15.6686 8.688 18.2286 12 18.2286C13.656 18.2286 15.168 17.5886 16.248 16.5486C17.028 17.5657 18.372 18.2286 19.8 18.2286C22.164 18.2286 24 16.4 24 14.1486V12.5143C24 6.20571 18.624 1.08571 12 1.08571ZM12 15.9429C10.008 15.9429 8.4 14.4114 8.4 12.5143C8.4 10.6171 10.008 9.08571 12 9.08571C13.992 9.08571 15.6 10.6171 15.6 12.5143C15.6 14.4114 13.992 15.9429 12 15.9429Z",fill:"#0F054C"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0_266_4353"}},[e("rect",{attrs:{width:"24",height:"24",fill:"white"}})])])])]),t._v(" "),e("div",{staticClass:"phone_number"},[t._v("\n            "+t._s(t.contacts.address)+"\n          ")])])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"subscribe"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6"},[e("div",{staticClass:"sb_title"},[t._v("\n              "+t._s(t.$t("quiz"))+"\n            ")]),t._v(" "),e("div",{staticClass:"sb_description"},[t._v("\n             "+t._s(t.$t("quiz_description"))+"\n            ")])]),t._v(" "),e("div",{staticClass:"col-xl-6"},[e("div",{staticClass:"sb_form"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.application()}}},[e("div",{staticClass:"form_input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:t.$t("name")},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form_input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email_address,expression:"email_address"}],attrs:{type:"text",placeholder:t.$t("email")},domProps:{value:t.email_address},on:{input:function(e){e.target.composing||(t.email_address=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form_input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{type:"text",placeholder:t.$t("message")},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form_btn"},[e("button",[t._v(t._s(t.$t("send")))])])])])])])])])])])])]),t._v(" "),e("Footer")],1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"col-xl-6"},[t("div",[t("iframe",{attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.0939921088869!2d69.28076989671513!3d41.32243724350224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba7ac0d1e29%3A0xa5b1a5dc18600e2c!2z0JzQuNC90LjRgdGC0LXRgNGB0YLQstC-INGA0LDQt9Cy0LjRgtC40Y8g0YHQv9C-0YDRgtCwINCg0LXRgdC_0YPQsdC70LjQutC4INCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1661367295443!5m2!1sru!2s",width:"600",height:"450",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:l(378).default,Footer:l(377).default})}}]);