(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{jkDv:function(t,e,a){"use strict";a.r(e),a.d(e,"AdminModule",function(){return E});var i=a("ofXK"),n=a("fXoL"),c=a("tyNb"),o=a("/t3+"),l=a("bTqV"),b=a("NFeN");let s=(()=>{class t{constructor(t){this.router=t,this.loading=!0}ngOnInit(){}logout(){confirm("Keluar aplikasi?")&&(localStorage.removeItem("appToken"),this.router.navigate(["/login"]))}}return t.\u0275fac=function(e){return new(e||t)(n.Pb(c.a))},t.\u0275cmp=n.Jb({type:t,selectors:[["app-admin"]],decls:11,vars:0,consts:[["name","viewport","content","width=device-width, initial-scale=1"],["rel","stylesheet","href","https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"],["color","primary"],["mat-button","","routerLink","/admin/employee",2,"background-color","#212121","color","rgb(255, 255, 255)"],[1,"example-spacer"],["mat-button","",2,"margin-left","10px","color","rgb(255, 255, 255)",3,"click"]],template:function(t,e){1&t&&(n.Qb(0,"meta",0),n.Qb(1,"link",1),n.Tb(2),n.Vb(3,"mat-toolbar",2),n.Vb(4,"button",3),n.zc(5,"DAFTAR HARGA"),n.Ub(),n.Qb(6,"span",4),n.Vb(7,"button",5),n.cc("click",function(){return e.logout()}),n.Vb(8,"mat-icon"),n.zc(9,"logout"),n.Ub(),n.Ub(),n.Ub(),n.Qb(10,"router-outlet"),n.Sb())},directives:[o.a,l.a,c.b,b.a,c.d],styles:[".example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]}),t})();var r=a("hctd"),d=a("3Pt+"),m=a("0IaG"),h=a("I/3d"),p=a("UbJi"),u=a("kmnG"),g=a("qFsG");let f=(()=>{class t{constructor(t,e,a,i){this.dialogRef=t,this.data=e,this.db=a,this.auth=i,this.userData={}}ngOnInit(){this.auth.user.subscribe(t=>{this.userData=t})}saveData(){if(this.loading=!0,null==this.data.id){let t=(new Date).getTime().toString();this.data.uid=this.userData.uid,this.db.collection("employees").doc(t).set(this.data).then(t=>{this.dialogRef.close(this.data),this.loading=!1}).catch(t=>{console.log(t),this.loading=!1,alert("Tidak Dapat Menyimpan Data")})}else this.db.collection("employees/").doc(this.data.id).update(this.data).then(t=>{this.dialogRef.close(this.data),this.loading=!1}).catch(t=>{console.log(t),this.loading=!1,alert("Tidak Dapat Mengupdate Data")})}}return t.\u0275fac=function(e){return new(e||t)(n.Pb(m.f),n.Pb(m.a),n.Pb(h.a),n.Pb(p.a))},t.\u0275cmp=n.Jb({type:t,selectors:[["app-employee-detail"]],decls:39,vars:9,consts:[["name","viewport","content","width=device-width, initial-scale=1"],["rel","stylesheet","href","https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"],["href","https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css","rel","stylesheet","integrity","sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC","crossorigin","anonymous"],["mat-dialog-title",""],["mat-dialog-content",""],["appearance","outline",2,"width","100%"],["matInput","",3,"ngModel","ngModelChange"],["mat-dialog-action","","align","end"],["mat-button","","mat-dialog-close",""],["mat-flat-button","",3,"disabled","click"]],template:function(t,e){1&t&&(n.Qb(0,"meta",0),n.Qb(1,"link",1),n.Qb(2,"link",2),n.Vb(3,"h3",3),n.zc(4," Detail\n"),n.Ub(),n.Vb(5,"div",4),n.Vb(6,"mat-form-field",5),n.Vb(7,"mat-label"),n.zc(8,"Nama Produk"),n.Ub(),n.Vb(9,"input",6),n.cc("ngModelChange",function(t){return e.data.name=t}),n.Ub(),n.Ub(),n.Vb(10,"mat-form-field",5),n.Vb(11,"mat-label"),n.zc(12,"Ukuran"),n.Ub(),n.Vb(13,"input",6),n.cc("ngModelChange",function(t){return e.data.size=t}),n.Ub(),n.Ub(),n.Vb(14,"mat-form-field",5),n.Vb(15,"mat-label"),n.zc(16,"Jumlah"),n.Ub(),n.Vb(17,"input",6),n.cc("ngModelChange",function(t){return e.data.jumlah=t}),n.Ub(),n.Ub(),n.Vb(18,"mat-form-field",5),n.Vb(19,"mat-label"),n.zc(20,"Kertas"),n.Ub(),n.Vb(21,"input",6),n.cc("ngModelChange",function(t){return e.data.paper=t}),n.Ub(),n.Ub(),n.Vb(22,"mat-form-field",5),n.Vb(23,"mat-label"),n.zc(24,"Bingkai"),n.Ub(),n.Vb(25,"input",6),n.cc("ngModelChange",function(t){return e.data.bingkai=t}),n.Ub(),n.Ub(),n.Vb(26,"mat-form-field",5),n.Vb(27,"mat-label"),n.zc(28,"Lama Pengerjaan"),n.Ub(),n.Vb(29,"input",6),n.cc("ngModelChange",function(t){return e.data.time=t}),n.Ub(),n.Ub(),n.Vb(30,"mat-form-field",5),n.Vb(31,"mat-label"),n.zc(32,"Harga"),n.Ub(),n.Vb(33,"input",6),n.cc("ngModelChange",function(t){return e.data.price=t}),n.Ub(),n.Ub(),n.Ub(),n.Vb(34,"div",7),n.Vb(35,"button",8),n.zc(36,"Batal"),n.Ub(),n.Vb(37,"button",9),n.cc("click",function(){return e.saveData()}),n.zc(38),n.Ub(),n.Ub()),2&t&&(n.Eb(9),n.lc("ngModel",e.data.name),n.Eb(4),n.lc("ngModel",e.data.size),n.Eb(4),n.lc("ngModel",e.data.jumlah),n.Eb(4),n.lc("ngModel",e.data.paper),n.Eb(4),n.lc("ngModel",e.data.bingkai),n.Eb(4),n.lc("ngModel",e.data.time),n.Eb(4),n.lc("ngModel",e.data.price),n.Eb(4),n.lc("disabled",e.loading),n.Eb(1),n.Ac(e.loading?"Menyimpan..":"Simpan"))},directives:[m.g,m.d,u.b,u.e,g.b,d.c,d.j,d.l,l.a,m.c],styles:[""]}),t})();var V=a("Xa2L"),U=a("Wp6s");function y(t,e){1&t&&(n.Vb(0,"div",5),n.Qb(1,"mat-spinner"),n.Ub())}function k(t,e){if(1&t){const t=n.Wb();n.Vb(0,"tr"),n.Vb(1,"td"),n.zc(2),n.Ub(),n.Vb(3,"td"),n.zc(4),n.Ub(),n.Vb(5,"td"),n.zc(6),n.Ub(),n.Vb(7,"td"),n.zc(8),n.Ub(),n.Vb(9,"td"),n.zc(10),n.Ub(),n.Vb(11,"td"),n.zc(12),n.Ub(),n.Vb(13,"td"),n.zc(14),n.Ub(),n.Vb(15,"td"),n.zc(16),n.Ub(),n.Vb(17,"td"),n.zc(18),n.Ub(),n.Vb(19,"td",9),n.Vb(20,"mat-icon",11),n.cc("click",function(){n.sc(t);const a=e.$implicit,i=e.index;return n.gc(2).EmployeeDetail(a,i)}),n.zc(21,"edit_note"),n.Ub(),n.Vb(22,"mat-icon",12),n.cc("click",function(){n.sc(t);const a=e.$implicit,i=e.index;return n.gc(2).DeleteEmployee(a.id,i)}),n.zc(23,"delete_forever"),n.Ub(),n.Ub(),n.Ub()}if(2&t){const t=e.$implicit,a=e.index;n.Eb(2),n.Ac(a+1),n.Eb(2),n.Ac(t.name),n.Eb(2),n.Ac(t.size),n.Eb(2),n.Ac(t.jumlah),n.Eb(2),n.Ac(t.paper),n.Eb(2),n.Ac(t.bingkai),n.Eb(2),n.Ac(t.time),n.Eb(2),n.Ac(t.price),n.Eb(2),n.Ac(t.gender)}}function z(t,e){if(1&t){const t=n.Wb();n.Vb(0,"mat-card"),n.Vb(1,"mat-card-header"),n.Vb(2,"mat-card-title"),n.zc(3),n.Ub(),n.Ub(),n.Vb(4,"mat-card-content"),n.Vb(5,"div",6),n.Qb(6,"span",7),n.Vb(7,"button",8),n.cc("click",function(){return n.sc(t),n.gc().EmployeeDetail({},-1)}),n.zc(8,"Tambah Daftar"),n.Ub(),n.Ub(),n.Qb(9,"br"),n.Vb(10,"table",6),n.Vb(11,"thead"),n.Vb(12,"th"),n.zc(13,"No"),n.Ub(),n.Vb(14,"th"),n.zc(15,"Nama Produk"),n.Ub(),n.Vb(16,"th"),n.zc(17,"Ukuran"),n.Ub(),n.Vb(18,"th"),n.zc(19,"Jumlah"),n.Ub(),n.Vb(20,"th"),n.zc(21,"Kertas"),n.Ub(),n.Vb(22,"th"),n.zc(23,"Bingkai"),n.Ub(),n.Vb(24,"th"),n.zc(25,"Lama Pengerjaan"),n.Ub(),n.Vb(26,"th"),n.zc(27,"Harga"),n.Ub(),n.Qb(28,"th",9),n.Ub(),n.Vb(29,"tbody"),n.yc(30,k,24,9,"tr",10),n.Ub(),n.Ub(),n.Ub(),n.Ub()}if(2&t){const t=n.gc();n.Eb(3),n.Ac(t.title),n.Eb(27),n.lc("ngForOf",t.employees)}}const D=[{path:"",component:s,children:[{path:"employee",component:(()=>{class t{constructor(t,e,a){this.dialog=t,this.auth=e,this.db=a,this.employees={},this.userData={},this.loadingDelete={}}ngOnInit(){this.title="Daftar Harga",this.auth.user.subscribe(t=>{this.userData=t,this.getEmployees()})}getEmployees(){this.loading=!0,this.db.collection("employees",t=>t.where("uid","==",this.userData.uid)).valueChanges({idField:"id"}).subscribe(t=>{console.log(t),this.employees=t,this.loading=!1},t=>{this.loading=!1})}EmployeeDetail(t,e){this.dialog.open(f,{width:"400px",data:t}).afterClosed().subscribe(t=>{})}DeleteEmployee(t,e){confirm("Delete item?")&&this.db.collection("employees").doc(t).delete().then(t=>{this.employees.splice(e,1),this.loadingDelete[e]=!1}).catch(t=>{this.loadingDelete[e]=!1,alert("Tidak dapat menghapus data")})}}return t.\u0275fac=function(e){return new(e||t)(n.Pb(m.b),n.Pb(p.a),n.Pb(h.a))},t.\u0275cmp=n.Jb({type:t,selectors:[["app-employee"]],decls:5,vars:2,consts:[["name","viewport","content","width=device-width, initial-scale=1"],["rel","stylesheet","href","https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"],["href","https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css","rel","stylesheet","integrity","sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC","crossorigin","anonymous"],["style","height: 300px;","class","uk-flex uk-flex-center uk-flex-middle",4,"ngIf"],[4,"ngIf"],[1,"uk-flex","uk-flex-center","uk-flex-middle",2,"height","300px"],[1,"uk-flex"],[1,"uk-width-expand"],["mat-flat-button","","color","primary",2,"color","rgb(255, 255, 255)","float","right","background-color","#424242",3,"click"],["align","right"],[4,"ngFor","ngForOf"],[2,"cursor","pointer","margin-right","20px","color","#4CAF50",3,"click"],["color","accent",2,"cursor","pointer",3,"click"]],template:function(t,e){1&t&&(n.Qb(0,"meta",0),n.Qb(1,"link",1),n.Qb(2,"link",2),n.yc(3,y,2,0,"div",3),n.yc(4,z,31,2,"mat-card",4)),2&t&&(n.Eb(3),n.lc("ngIf",e.loading),n.Eb(1),n.lc("ngIf",!e.loading))},directives:[i.k,V.b,U.a,U.c,U.e,U.b,l.a,i.j,b.a],styles:[""]}),t})()},{path:"",pathMatch:"full",redirectTo:"/admin/employee"}]}];let E=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.Nb({type:t}),t.\u0275inj=n.Mb({imports:[[i.c,c.c.forChild(D),r.a,d.f]]}),t})()}}]);