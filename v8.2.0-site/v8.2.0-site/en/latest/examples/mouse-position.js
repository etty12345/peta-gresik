"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7424],{1658:function(e,t,n){var o=n(1055),c=n(84049),s=n(55117),a=n(72893),r=n(40824),i=n(19775),u=n(35777);const m=new c.Z({coordinateFormat:(0,i.Fj)(4),projection:"EPSG:4326",className:"custom-mouse-position",target:document.getElementById("mouse-position")});new o.Z({controls:(0,u.c)().extend([m]),layers:[new a.Z({source:new s.Z})],target:"map",view:new r.ZP({center:[0,0],zoom:2})});document.getElementById("projection").addEventListener("change",(function(e){m.setProjection(e.target.value)}));document.getElementById("precision").addEventListener("change",(function(e){const t=(0,i.Fj)(e.target.valueAsNumber);m.setCoordinateFormat(t)}))}},function(e){var t;t=1658,e(e.s=t)}]);
//# sourceMappingURL=mouse-position.js.map