"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[83758],{450521:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-0c7b447f","path":"/devices/E2013.html","title":"IKEA E2013 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"IKEA E2013 control via MQTT","description":"Integrate your IKEA E2013 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-12-26T18:38:16.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Contact (binary)","slug":"contact-binary","link":"#contact-binary","children":[]},{"level":3,"title":"Identify (enum)","slug":"identify-enum","link":"#identify-enum","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1717438513000},"filePathRelative":"devices/E2013.md"}')},574490:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var a=i(166252);const n=(0,a._)("h1",{id:"ikea-e2013",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#ikea-e2013","aria-hidden":"true"},"#"),(0,a.Uk)(" IKEA E2013")],-1),o=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),d=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"E2013")],-1),l=(0,a._)("td",null,"Vendor",-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"PARASOLL door/window sensor")],-1),r=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"contact, identify, battery, linkquality")],-1),u=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/E2013.png",alt:"IKEA E2013"})])],-1),c=(0,a._)("h2",{id:"notes",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,a.Uk)(" Notes")],-1),h=(0,a._)("h3",{id:"pairing",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,a.Uk)(" Pairing")],-1),p=(0,a._)("p",null,"Pair the contact sensor to Zigbee2MQTT by pressing the link button 4 times. LED indicator will start flashing while device is being paired.",-1),m=(0,a._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,a.Uk)(" OTA updates")],-1),f=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),g=(0,a.uE)('<ul><li><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a with a maximum value of <code>30</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="contact-binary" tabindex="-1"><a class="header-anchor" href="#contact-binary" aria-hidden="true">#</a> Contact (binary)</h3><p>Indicates whether the device is opened or closed. Value can be found in the published state on the <code>contact</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>false</code> contact is ON, if <code>true</code> OFF.</p><h3 id="identify-enum" tabindex="-1"><a class="header-anchor" href="#identify-enum" aria-hidden="true">#</a> Identify (enum)</h3><p>Initiate device identification. This device is asleep by default.You may need to wake it up first before sending the identify command.. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),b={},v=(0,i(983744).Z)(b,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),n,(0,a._)("table",null,[o,(0,a._)("tbody",null,[d,(0,a._)("tr",null,[l,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=IKEA"},{default:(0,a.w5)((()=>[(0,a.Uk)("IKEA")])),_:1})])]),s,r,u])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),c,h,p,(0,a.kq)(" Notes END: Do not edit below this line "),m,(0,a._)("p",null,[(0,a.Uk)("This device supports OTA updates, for more information see "),(0,a.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("OTA updates")])),_:1}),(0,a.Uk)(".")]),f,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),g])}]])}}]);