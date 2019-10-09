var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showPopup']])
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[[5],[[5],[1,'uni-popup__wrapper']],[[7],[3,'type']]],[[7],[3,'ani']]],[[2,'?:'],[[7],[3,'animation']],[1,'ani'],[1,'']]],[[2,'?:'],[[2,'!'],[[7],[3,'custom']]],[1,'uni-custom'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'close']],[[4],[[5],[1,true]]]]]]]]]]])
Z(z[1])
Z([3,'uni-popup__wrapper-box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clear']],[[4],[[5],[1,'$event']]]]]]]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'products']])
Z(z[0])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'weui-cell weui-check__label']],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[1,0]],[1,'weui-cell-topLine'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'productChange']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([3,'weui-cell__hd weui-check__hd_in-checkbox'])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'checked']]])
Z([[6],[[7],[3,'item']],[3,'checked']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page__bd'])
Z([3,'radioChange'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'radioItems']])
Z(z[2])
Z([3,'__e'])
Z([3,'weui-cell weui-check__label'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'radioChange']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'checked']])
Z([[2,'!='],[[7],[3,'care']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'butBol']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'vue-ref'])
Z([3,'popup'])
Z([3,'center'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/uni-popup/uni-popup.wxml','./pages/catalog/catalog.wxml','./pages/catalogSecond/catalogSecond.wxml','./pages/index/index.wxml','./pages/main/main.wxml','./pages/order/order.wxml','./pages/porder/porder.wxml','./pages/settlement/settlement.wxml','./pages/share/share.wxml','./pages/user/user.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
var xC=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var oD=_mz(z,'view',['catchtap',4,'class',1,'data-event-opts',2],[],e,s,gg)
var fE=_n('slot')
_(oD,fE)
_(xC,oD)
_(oB,xC)
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oH=_v()
_(r,oH)
var cI=function(lK,oJ,aL,gg){
var eN=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],lK,oJ,gg)
var bO=_n('view')
_rz(z,bO,'class',7,lK,oJ,gg)
var oP=_v()
_(bO,oP)
if(_oz(z,8,lK,oJ,gg)){oP.wxVkey=1
}
var xQ=_v()
_(bO,xQ)
if(_oz(z,9,lK,oJ,gg)){xQ.wxVkey=1
}
oP.wxXCkey=1
xQ.wxXCkey=1
_(eN,bO)
_(aL,eN)
return aL
}
oH.wxXCkey=2
_2z(z,2,cI,e,s,gg,oH,'item','index','index')
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oV=_n('view')
_rz(z,oV,'class',0,e,s,gg)
var oX=_n('radio-group')
_rz(z,oX,'bindchange',1,e,s,gg)
var lY=_v()
_(oX,lY)
var aZ=function(e2,t1,b3,gg){
var x5=_mz(z,'label',['bindtap',6,'class',1,'data-event-opts',2],[],e2,t1,gg)
var o6=_v()
_(x5,o6)
if(_oz(z,9,e2,t1,gg)){o6.wxVkey=1
}
o6.wxXCkey=1
_(b3,x5)
return b3
}
lY.wxXCkey=2
_2z(z,4,aZ,e,s,gg,lY,'item','index','index')
_(oV,oX)
var cW=_v()
_(oV,cW)
if(_oz(z,10,e,s,gg)){cW.wxVkey=1
}
cW.wxXCkey=1
_(r,oV)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var c8=_v()
_(r,c8)
if(_oz(z,0,e,s,gg)){c8.wxVkey=1
}
c8.wxXCkey=1
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var o0=_mz(z,'uni-popup',['bind:__l',0,'class',1,'data-ref',1,'type',2,'vueId',3,'vueSlots',4],[],e,s,gg)
_(r,o0)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/main/main","pages/catalog/catalog","pages/order/order","pages/user/user","pages/share/share","pages/settlement/settlement","pages/catalogSecond/catalogSecond","pages/porder/porder"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"汇骏护理","navigationBarBackgroundColor":"white","backgroundColor":"white"},"tabBar":{"color":"#999999","selectedColor":"#07c160","borderStyle":"black","backgroundColor":"#F8F8F8","list":[{"pagePath":"pages/main/main","iconPath":"static/iconfont-home.png","selectedIconPath":"static/iconfont-home-active.png","text":"主页"},{"pagePath":"pages/catalog/catalog","iconPath":"static/iconfont-list.png","selectedIconPath":"static/iconfont-list-active.png","text":"项目"},{"pagePath":"pages/order/order","iconPath":"static/iconfont-cart.png","selectedIconPath":"static/iconfont-cart-active.png","text":"我的预订"},{"pagePath":"pages/user/user","iconPath":"static/iconfont-user.png","selectedIconPath":"static/iconfont-user-active.png","text":"个人中心"},{"pagePath":"pages/share/share","iconPath":"static/share.png","selectedIconPath":"static/share-active.jpeg","text":"联系我们"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"hjhlwx1","compilerVersion":"2.3.3","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/uni-popup/uni-popup.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-popup/uni-popup.wxml']=$gwx('./components/uni-popup/uni-popup.wxml');

__wxAppCode__['pages/catalog/catalog.json']={"usingComponents":{}};
__wxAppCode__['pages/catalog/catalog.wxml']=$gwx('./pages/catalog/catalog.wxml');

__wxAppCode__['pages/catalogSecond/catalogSecond.json']={"usingComponents":{}};
__wxAppCode__['pages/catalogSecond/catalogSecond.wxml']=$gwx('./pages/catalogSecond/catalogSecond.wxml');

__wxAppCode__['pages/index/index.json']={"usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/main/main.json']={"usingComponents":{}};
__wxAppCode__['pages/main/main.wxml']=$gwx('./pages/main/main.wxml');

__wxAppCode__['pages/order/order.json']={"usingComponents":{}};
__wxAppCode__['pages/order/order.wxml']=$gwx('./pages/order/order.wxml');

__wxAppCode__['pages/porder/porder.json']={"usingComponents":{}};
__wxAppCode__['pages/porder/porder.wxml']=$gwx('./pages/porder/porder.wxml');

__wxAppCode__['pages/settlement/settlement.json']={"usingComponents":{}};
__wxAppCode__['pages/settlement/settlement.wxml']=$gwx('./pages/settlement/settlement.wxml');

__wxAppCode__['pages/share/share.json']={"usingComponents":{"uni-popup":"/components/uni-popup/uni-popup"}};
__wxAppCode__['pages/share/share.wxml']=$gwx('./pages/share/share.wxml');

__wxAppCode__['pages/user/user.json']={"usingComponents":{}};
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{2323:function(e,n,t){"use strict";t.r(n);var a=t("af43");for(var r in a)"default"!==r&&function(e){t.d(n,e,function(){return a[e]})}(r);t("ce0d");var u,o,i=t("2877"),s=Object(i["a"])(a["default"],u,o,!1,null,null,null);n["default"]=s.exports},"4a57":function(e,n,t){},af43:function(e,n,t){"use strict";t.r(n);var a=t("c6a9"),r=t.n(a);for(var u in a)"default"!==u&&function(e){t.d(n,e,function(){return a[e]})}(u);n["default"]=r.a},ba85:function(e,n,t){"use strict";(function(e){t("faf8"),t("921b");var n=r(t("66fd")),a=r(t("2323"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(n){o(e,n,t[n])})}return e}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}n.default.config.productionTip=!1,a.default.mpType="app";var i=new n.default(u({},a.default));e(i).$mount()}).call(this,t("6e42")["createApp"])},c6a9:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("3680"));function r(e){return e&&e.__esModule?e:{default:e}}var u={globalData:{userInfo:null,regions:[],livings:["独居","与配偶同住","与子女同住","与保姆同住"],flats:["私人屋苑","宿舍楼(无电梯)","平房"],diseases:["健康良好","长期病患","曾施手术","失明","失聪","其他"],scares:["无","有"],ifs:[{name:"鼻胃管",value:"0"},{name:"留置导尿管",value:"1"},{name:"长期氧气",value:"2"},{name:"气管造口",value:"3"},{name:"腹膜透析",value:"4"},{name:"直肠造口",value:"5"},{name:"压疮",value:"6"},{name:"其他",value:"7"}],isNewUser:!0,users:[{id:0,lastname:"",firstname:"",sexes:0,birthDate:a.default.getToday(),phone:"",regions:0,address:"",occupation:"",livings:0,flats:0,diseases:0,scares:0,ifs:[!1,!1,!1,!1,!1,!1,!1,!1],otherTxt:"",relationship:0},{id:0,lastname:"",firstname:"",sexes:0,birthDate:a.default.getToday(),phone:"",regions:0,address:"",occupation:"",livings:0,flats:0,diseases:0,scares:0,ifs:[!1,!1,!1,!1,!1,!1,!1,!1],otherTxt:"",relationship:0}]},onLaunch:function(){},onShow:function(){},onHide:function(){}};n.default=u},ce0d:function(e,n,t){"use strict";var a=t("4a57"),r=t.n(a);r.a}},[["ba85","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var r, o, a = t[0], l = t[1], p = t[2], c = 0, f = []; c < a.length; c++) {
      o = a[c], u[o] && f.push(u[o][0]), u[o] = 0;
    }

    for (r in l) {
      Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    }

    s && s(t);

    while (f.length) {
      f.shift()();
    }

    return i.push.apply(i, p || []), n();
  }

  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, o = 1; o < n.length; o++) {
        var a = n[o];
        0 !== u[a] && (r = !1);
      }

      r && (i.splice(t--, 1), e = l(l.s = n[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      u = {
    "common/runtime": 0
  },
      i = [];

  function a(e) {
    return l.p + "" + e + ".js";
  }

  function l(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, l), n.l = !0, n.exports;
  }

  l.e = function (e) {
    var t = [],
        n = {
      "components/uni-popup/uni-popup": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise(function (t, n) {
      for (var r = ({
        "components/uni-popup/uni-popup": "components/uni-popup/uni-popup"
      }[e] || e) + ".wxss", u = l.p + r, i = document.getElementsByTagName("link"), a = 0; a < i.length; a++) {
        var p = i[a],
            c = p.getAttribute("data-href") || p.getAttribute("href");
        if ("stylesheet" === p.rel && (c === r || c === u)) return t();
      }

      var f = document.getElementsByTagName("style");

      for (a = 0; a < f.length; a++) {
        p = f[a], c = p.getAttribute("data-href");
        if (c === r || c === u) return t();
      }

      var s = document.createElement("link");
      s.rel = "stylesheet", s.type = "text/css", s.onload = t, s.onerror = function (t) {
        var r = t && t.target && t.target.src || u,
            i = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        i.request = r, delete o[e], s.parentNode.removeChild(s), n(i);
      }, s.href = u;
      var d = document.getElementsByTagName("head")[0];
      d.appendChild(s);
    }).then(function () {
      o[e] = 0;
    }));
    var r = u[e];
    if (0 !== r) if (r) t.push(r[2]);else {
      var i = new Promise(function (t, n) {
        r = u[e] = [t, n];
      });
      t.push(r[2] = i);
      var p,
          c = document.createElement("script");
      c.charset = "utf-8", c.timeout = 120, l.nc && c.setAttribute("nonce", l.nc), c.src = a(e), p = function p(t) {
        c.onerror = c.onload = null, clearTimeout(f);
        var n = u[e];

        if (0 !== n) {
          if (n) {
            var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                i = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            i.type = r, i.request = o, n[1](i);
          }

          u[e] = void 0;
        }
      };
      var f = setTimeout(function () {
        p({
          type: "timeout",
          target: c
        });
      }, 12e4);
      c.onerror = c.onload = p, document.head.appendChild(c);
    }
    return Promise.all(t);
  }, l.m = e, l.c = r, l.d = function (e, t, n) {
    l.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, t) {
    if (1 & t && (e = l(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (l.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      l.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, l.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(t, "a", t), t;
  }, l.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, l.p = "/", l.oe = function (e) {
    throw console.error(e), e;
  };
  var p = global["webpackJsonp"] = global["webpackJsonp"] || [],
      c = p.push.bind(p);
  p.push = t, p = p.slice();

  for (var f = 0; f < p.length; f++) {
    t(p[f]);
  }

  var s = c;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(i){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),o="";if(i.length>1){var a=i.pop();o=i.join("---COMMA---"),0===a.indexOf(" at ")?o+=a:o+="---COMMA---"+a}else o=i[0];return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,s){var u,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return r})},3680:function(t,e,n){"use strict";var r=function(t){var e=t.getFullYear(),n=t.getMonth()+1,r=t.getDate(),o=t.getHours(),a=t.getMinutes(),s=t.getSeconds();return[e,n,r].map(i).join("/")+" "+[o,a,s].map(i).join(":")},i=function(t){return t=t.toString(),t[1]?t:"0"+t},o=function(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,r=t.getDate();return[e,n,r].map(i).join("-")},a=function(t,e){wx.showLoading({title:e}),t.setData({flag:!1})},s=function(t){wx.hideLoading(),t.setData({flag:!0})},u=function(t,e){var n=new Date(t.replace(/-/g,"/")),r=new Date(e.replace(/-/g,"/")),i=r.getTime()-n.getTime(),o=parseInt(i/864e5);return o},c=function(t){var e=new Date;e.setDate(e.getDate()+t);var n=e.getFullYear(),r=e.getMonth()+1,o=e.getDate();return[n,r,o].map(i).join("-")};t.exports={formatTime:r,showLoading:a,hideLoading:s,getToday:o,dateDif:u,dateAddDay:c}},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function o(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function l(t){return"[object Object]"===c.call(t)}function f(t){return"[object RegExp]"===c.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function h(t){return null==t?"":Array.isArray(t)||l(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function _(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}_("slot,component",!0);var y=_("key,ref,slot,slot-scope,is");function g(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function b(t,e){return m.call(t,e)}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var $=/-(\w)/g,S=w(function(t){return t.replace($,function(t,e){return e?e.toUpperCase():""})}),O=w(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),x=/\B([A-Z])/g,A=w(function(t){return t.replace(x,"-$1").toLowerCase()});function k(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function j(t,e){return t.bind(e)}var D=Function.prototype.bind?j:k;function E(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function P(t,e){for(var n in e)t[n]=e[n];return t}function T(t){for(var e={},n=0;n<t.length;n++)t[n]&&P(e,t[n]);return e}function I(t,e,n){}var C=function(t,e,n){return!1},N=function(t){return t};function q(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every(function(t,n){return q(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return q(t[n],e[n])})}catch(c){return!1}}function R(t,e){for(var n=0;n<t.length;n++)if(q(t[n],e))return n;return-1}function U(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var z=["component","directive","filter"],M=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],B={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:C,isReservedAttr:C,isUnknownElement:C,getTagNamespace:I,parsePlatformTagName:N,mustUseProp:C,async:!0,_lifecycleHooks:M},V=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function F(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function L(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var H=new RegExp("[^"+V.source+".$_\\d]");function J(t){if(!H.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var W,G="__proto__"in{},K="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Y=X&&WXEnvironment.platform.toLowerCase(),Z=K&&window.navigator.userAgent.toLowerCase(),Q=Z&&/msie|trident/.test(Z),tt=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),et=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===Y),nt=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(K)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(ei){}var it=function(){return void 0===W&&(W=!K&&!X&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),W},ot=K&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ut="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=I,lt=0,ft=function(){this.id=lt++,this.subs=[]};function pt(t){ft.SharedObject.targetStack.push(t),ft.SharedObject.target=t}function dt(){ft.SharedObject.targetStack.pop(),ft.SharedObject.target=ft.SharedObject.targetStack[ft.SharedObject.targetStack.length-1]}ft.prototype.addSub=function(t){this.subs.push(t)},ft.prototype.removeSub=function(t){g(this.subs,t)},ft.prototype.depend=function(){ft.SharedObject.target&&ft.SharedObject.target.addDep(this)},ft.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ft.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ft.SharedObject.target=null,ft.SharedObject.targetStack=[];var ht=function(t,e,n,r,i,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(ht.prototype,vt);var _t=function(t){void 0===t&&(t="");var e=new ht;return e.text=t,e.isComment=!0,e};function yt(t){return new ht(void 0,void 0,void 0,String(t))}function gt(t){var e=new ht(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var mt=Array.prototype,bt=Object.create(mt),wt=["push","pop","shift","unshift","splice","sort","reverse"];wt.forEach(function(t){var e=mt[t];L(bt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&a.observeArray(i),a.dep.notify(),o})});var $t=Object.getOwnPropertyNames(bt),St=!0;function Ot(t){St=t}var xt=function(t){this.value=t,this.dep=new ft,this.vmCount=0,L(t,"__ob__",this),Array.isArray(t)?(G?t.push!==t.__proto__.push?kt(t,bt,$t):At(t,bt):kt(t,bt,$t),this.observeArray(t)):this.walk(t)};function At(t,e){t.__proto__=e}function kt(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];L(t,o,e[o])}}function jt(t,e){var n;if(u(t)&&!(t instanceof ht))return b(t,"__ob__")&&t.__ob__ instanceof xt?n=t.__ob__:St&&!it()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new xt(t)),e&&n&&n.vmCount++,n}function Dt(t,e,n,r,i){var o=new ft,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,u=a&&a.set;s&&!u||2!==arguments.length||(n=t[e]);var c=!i&&jt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ft.SharedObject.target&&(o.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Tt(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!u||(u?u.call(t,e):n=e,c=!i&&jt(e),o.notify())}})}}function Et(t,e,n){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Dt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Pt(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function Tt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Tt(e)}xt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Dt(t,e[n])},xt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)jt(t[e])};var It=B.optionMergeStrategies;function Ct(t,e){if(!e)return t;for(var n,r,i,o=ut?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)n=o[a],"__ob__"!==n&&(r=t[n],i=e[n],b(t,n)?r!==i&&l(r)&&l(i)&&Ct(r,i):Et(t,n,i));return t}function Nt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?Ct(r,i):i}:e?t?function(){return Ct("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function qt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Rt(n):n}function Rt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Ut(t,e,n,r){var i=Object.create(t||null);return e?P(i,e):i}It.data=function(t,e,n){return n?Nt(t,e,n):e&&"function"!==typeof e?t:Nt(t,e)},M.forEach(function(t){It[t]=qt}),z.forEach(function(t){It[t+"s"]=Ut}),It.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var o in P(i,t),e){var a=i[o],s=e[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},It.props=It.methods=It.inject=It.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return P(i,t),e&&P(i,e),i},It.provide=Nt;var zt=function(t,e){return void 0===e?t:e};function Mt(t,e){var n=t.props;if(n){var r,i,o,a={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(o=S(i),a[o]={type:null})}else if(l(n))for(var s in n)i=n[s],o=S(s),a[o]=l(i)?i:{type:i};else 0;t.props=a}}function Bt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var o in n){var a=n[o];r[o]=l(a)?P({from:o},a):{from:a}}else 0}}function Vt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Ft(t,e,n){if("function"===typeof e&&(e=e.options),Mt(e,n),Bt(e,n),Vt(e),!e._base&&(e.extends&&(t=Ft(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Ft(t,e.mixins[r],n);var o,a={};for(o in t)s(o);for(o in e)b(t,o)||s(o);function s(r){var i=It[r]||zt;a[r]=i(t[r],e[r],n,r)}return a}function Lt(t,e,n,r){if("string"===typeof n){var i=t[e];if(b(i,n))return i[n];var o=S(n);if(b(i,o))return i[o];var a=O(o);if(b(i,a))return i[a];var s=i[n]||i[o]||i[a];return s}}function Ht(t,e,n,r){var i=e[t],o=!b(n,t),a=n[t],s=Kt(Boolean,i.type);if(s>-1)if(o&&!b(i,"default"))a=!1;else if(""===a||a===A(t)){var u=Kt(String,i.type);(u<0||s<u)&&(a=!0)}if(void 0===a){a=Jt(r,i,t);var c=St;Ot(!0),jt(a),Ot(c)}return a}function Jt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Wt(e.type)?r.call(t):r}}function Wt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Gt(t,e){return Wt(t)===Wt(e)}function Kt(t,e){if(!Array.isArray(e))return Gt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Gt(e[n],t))return n;return-1}function Xt(t,e,n){pt();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var a=!1===i[o].call(r,t,e,n);if(a)return}catch(ei){Zt(ei,r,"errorCaptured hook")}}}Zt(t,e,n)}finally{dt()}}function Yt(t,e,n,r,i){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&d(o)&&!o._handled&&(o.catch(function(t){return Xt(t,r,i+" (Promise/async)")}),o._handled=!0)}catch(ei){Xt(ei,r,i)}return o}function Zt(t,e,n){if(B.errorHandler)try{return B.errorHandler.call(null,t,e,n)}catch(ei){ei!==t&&Qt(ei,null,"config.errorHandler")}Qt(t,e,n)}function Qt(t,e,n){if(!K&&!X||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function re(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var ie=Promise.resolve();te=function(){ie.then(re),et&&setTimeout(I)}}else if(Q||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var oe=1,ae=new MutationObserver(re),se=document.createTextNode(String(oe));ae.observe(se,{characterData:!0}),te=function(){oe=(oe+1)%2,se.data=String(oe)}}function ue(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(ei){Xt(ei,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function le(t){fe(t,ce),ce.clear()}function fe(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!u(t)||Object.isFrozen(t)||t instanceof ht)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(i){n=t.length;while(n--)fe(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)fe(t[r[n]],e)}}}var pe=w(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function de(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Yt(r,null,arguments,e,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)Yt(i[o],null,t,e,"v-on handler")}return n.fns=t,n}function he(t,e,n,i,a,s){var u,c,l,f;for(u in t)c=t[u],l=e[u],f=pe(u),r(c)||(r(l)?(r(c.fns)&&(c=t[u]=de(c,s)),o(f.once)&&(c=t[u]=a(f.name,c,f.capture)),n(f.name,c,f.capture,f.passive,f.params)):c!==l&&(l.fns=c,t[u]=l));for(u in e)r(t[u])&&(f=pe(u),i(f.name,e[u],f.capture))}function ve(t,e,n){var o=e.options.props;if(!r(o)){var a={},s=t.attrs,u=t.props;if(i(s)||i(u))for(var c in o){var l=A(c);_e(a,u,c,l,!0)||_e(a,s,c,l,!1)}return a}}function _e(t,e,n,r,o){if(i(e)){if(b(e,n))return t[n]=e[n],o||delete e[n],!0;if(b(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function ge(t){return s(t)?[yt(t)]:Array.isArray(t)?be(t):void 0}function me(t){return i(t)&&i(t.text)&&a(t.isComment)}function be(t,e){var n,a,u,c,l=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(u=l.length-1,c=l[u],Array.isArray(a)?a.length>0&&(a=be(a,(e||"")+"_"+n),me(a[0])&&me(c)&&(l[u]=yt(c.text+a[0].text),a.shift()),l.push.apply(l,a)):s(a)?me(c)?l[u]=yt(c.text+a):""!==a&&l.push(yt(a)):me(a)&&me(c)?l[u]=yt(c.text+a.text):(o(t._isVList)&&i(a.tag)&&r(a.key)&&i(e)&&(a.key="__vlist"+e+"_"+n+"__"),l.push(a)));return l}function we(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function $e(t){var e=Se(t.$options.inject,t);e&&(Ot(!1),Object.keys(e).forEach(function(n){Dt(t,n,e[n])}),Ot(!0))}function Se(t,e){if(t){for(var n=Object.create(null),r=ut?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var a=t[o].from,s=e;while(s){if(s._provided&&b(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[o]){var u=t[o].default;n[o]="function"===typeof u?u.call(e):u}else 0}}return n}}function Oe(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==e&&o.fnContext!==e||!a||null==a.slot)o.asyncMeta&&o.asyncMeta.data&&"page"===o.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(o):(n.default||(n.default=[])).push(o);else{var s=a.slot,u=n[s]||(n[s]=[]);"template"===o.tag?u.push.apply(u,o.children||[]):u.push(o)}}for(var c in n)n[c].every(xe)&&delete n[c];return n}function xe(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Ae(t,e,r){var i,o=Object.keys(e).length>0,a=t?!!t.$stable:!o,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&s===r.$key&&!o&&!r.$hasNormal)return r;for(var u in i={},t)t[u]&&"$"!==u[0]&&(i[u]=ke(e,u,t[u]))}else i={};for(var c in e)c in i||(i[c]=je(e,c));return t&&Object.isExtensible(t)&&(t._normalized=i),L(i,"$stable",a),L(i,"$key",s),L(i,"$hasNormal",o),i}function ke(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:ge(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function je(t,e){return function(){return t[e]}}function De(t,e){var n,r,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))if(ut&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),l=c.next();while(!l.done)n.push(e(l.value,n.length)),l=c.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=e(t[s],s,r);return i(n)||(n=[]),n._isVList=!0,n}function Ee(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=P(P({},r),n)),i=o(n)||e):i=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function Pe(t){return Lt(this.$options,"filters",t,!0)||N}function Te(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ie(t,e,n,r,i){var o=B.keyCodes[e]||n;return i&&r&&!B.keyCodes[e]?Te(i,r):o?Te(o,t):r?A(r)!==e:void 0}function Ce(t,e,n,r,i){if(n)if(u(n)){var o;Array.isArray(n)&&(n=T(n));var a=function(a){if("class"===a||"style"===a||y(a))o=t;else{var s=t.attrs&&t.attrs.type;o=r||B.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var u=S(a),c=A(a);if(!(u in o)&&!(c in o)&&(o[a]=n[a],i)){var l=t.on||(t.on={});l["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Ne(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Re(r,"__static__"+t,!1),r)}function qe(t,e,n){return Re(t,"__once__"+e+(n?"_"+n:""),!0),t}function Re(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Ue(t[r],e+"_"+r,n);else Ue(t,e,n)}function Ue(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function ze(t,e){if(e)if(l(e)){var n=t.on=t.on?P({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function Me(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var o=t[i];Array.isArray(o)?Me(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return r&&(e.$key=r),e}function Be(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Ve(t,e){return"string"===typeof t?e+t:t}function Fe(t){t._o=qe,t._n=v,t._s=h,t._l=De,t._t=Ee,t._q=q,t._i=R,t._m=Ne,t._f=Pe,t._k=Ie,t._b=Ce,t._v=yt,t._e=_t,t._u=Me,t._g=ze,t._d=Be,t._p=Ve}function Le(t,e,r,i,a){var s,u=this,c=a.options;b(i,"_uid")?(s=Object.create(i),s._original=i):(s=i,i=i._original);var l=o(c._compiled),f=!l;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||n,this.injections=Se(c.inject,i),this.slots=function(){return u.$slots||Ae(t.scopedSlots,u.$slots=Oe(r,i)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ae(t.scopedSlots,this.slots())}}),l&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=Ae(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,r){var o=rn(s,t,e,n,r,f);return o&&!Array.isArray(o)&&(o.fnScopeId=c._scopeId,o.fnContext=i),o}:this._c=function(t,e,n,r){return rn(s,t,e,n,r,f)}}function He(t,e,r,o,a){var s=t.options,u={},c=s.props;if(i(c))for(var l in c)u[l]=Ht(l,c,e||n);else i(r.attrs)&&We(u,r.attrs),i(r.props)&&We(u,r.props);var f=new Le(r,u,a,o,t),p=s.render.call(null,f._c,f);if(p instanceof ht)return Je(p,r,f.parent,s,f);if(Array.isArray(p)){for(var d=ge(p)||[],h=new Array(d.length),v=0;v<d.length;v++)h[v]=Je(d[v],r,f.parent,s,f);return h}}function Je(t,e,n,r,i){var o=gt(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function We(t,e){for(var n in e)t[S(n)]=e[n]}Fe(Le.prototype);var Ge={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Ge.prepatch(n,n)}else{var r=t.componentInstance=Ye(t,Sn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;kn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Pn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Fn(n):Dn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?En(e,!0):e.$destroy())}},Ke=Object.keys(Ge);function Xe(t,e,n,a,s){if(!r(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var l;if(r(t.cid)&&(l=t,t=hn(l,c),void 0===t))return dn(l,e,n,a,s);e=e||{},pr(t),i(e.model)&&tn(t.options,e);var f=ve(e,t,s);if(o(t.options.functional))return He(t,f,e,n,a);var p=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}Ze(e);var h=t.options.name||s,v=new ht("vue-component-"+t.cid+(h?"-"+h:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:f,listeners:p,tag:s,children:a},l);return v}}}function Ye(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<Ke.length;n++){var r=Ke[n],i=e[r],o=Ge[r];i===o||i&&i._merged||(e[r]=i?Qe(o,i):o)}}function Qe(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[r],s=e.model.callback;i(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[r]=[s].concat(a)):o[r]=s}var en=1,nn=2;function rn(t,e,n,r,i,a){return(Array.isArray(n)||s(n))&&(i=r,r=n,n=void 0),o(a)&&(i=nn),on(t,e,n,r,i)}function on(t,e,n,r,o){if(i(n)&&i(n.__ob__))return _t();if(i(n)&&i(n.is)&&(e=n.is),!e)return _t();var a,s,u;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===nn?r=ge(r):o===en&&(r=ye(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||B.getTagNamespace(e),a=B.isReservedTag(e)?new ht(B.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!i(u=Lt(t.$options,"components",e))?new ht(e,n,r,void 0,void 0,t):Xe(u,n,t,r,e)):a=Xe(e,n,t,r);return Array.isArray(a)?a:i(a)?(i(s)&&an(a,s),i(n)&&sn(n),a):_t()}function an(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var a=0,s=t.children.length;a<s;a++){var u=t.children[a];i(u.tag)&&(r(u.ns)||o(n)&&"svg"!==u.tag)&&an(u,e,n)}}function sn(t){u(t.style)&&le(t.style),u(t.class)&&le(t.class)}function un(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,i=r&&r.context;t.$slots=Oe(e._renderChildren,i),t.$scopedSlots=n,t._c=function(e,n,r,i){return rn(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return rn(t,e,n,r,i,!0)};var o=r&&r.data;Dt(t,"$attrs",o&&o.attrs||n,null,!0),Dt(t,"$listeners",e._parentListeners||n,null,!0)}var cn,ln=null;function fn(t){Fe(t.prototype),t.prototype.$nextTick=function(t){return ue(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=Ae(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{ln=e,t=r.call(e._renderProxy,e.$createElement)}catch(ei){Xt(ei,e,"render"),t=e._vnode}finally{ln=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof ht||(t=_t()),t.parent=i,t}}function pn(t,e){return(t.__esModule||ut&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function dn(t,e,n,r,i){var o=_t();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function hn(t,e){if(o(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=ln;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var a=t.owners=[n],s=!0,c=null,l=null;n.$on("hook:destroyed",function(){return g(a,n)});var f=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==c&&(clearTimeout(c),c=null),null!==l&&(clearTimeout(l),l=null))},p=U(function(n){t.resolved=pn(n,e),s?a.length=0:f(!0)}),h=U(function(e){i(t.errorComp)&&(t.error=!0,f(!0))}),v=t(p,h);return u(v)&&(d(v)?r(t.resolved)&&v.then(p,h):d(v.component)&&(v.component.then(p,h),i(v.error)&&(t.errorComp=pn(v.error,e)),i(v.loading)&&(t.loadingComp=pn(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout(function(){c=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,f(!1))},v.delay||200)),i(v.timeout)&&(l=setTimeout(function(){l=null,r(t.resolved)&&h(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function vn(t){return t.isComment&&t.asyncFactory}function _n(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||vn(n)))return n}}function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&wn(t,e)}function gn(t,e){cn.$on(t,e)}function mn(t,e){cn.$off(t,e)}function bn(t,e){var n=cn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function wn(t,e,n){cn=t,he(e,n||{},gn,mn,bn,t),cn=void 0}function $n(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,o=t.length;i<o;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(o=a[s],o===e||o.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?E(n):n;for(var r=E(arguments,1),i='event handler for "'+t+'"',o=0,a=n.length;o<a;o++)Yt(n[o],e,r,e,i)}return e}}var Sn=null;function On(t){var e=Sn;return Sn=t,function(){Sn=e}}function xn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function An(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=On(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Pn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||g(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Pn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function kn(t,e,r,i,o){var a=i.data.scopedSlots,s=t.$scopedSlots,u=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),c=!!(o||t.$options._renderChildren||u);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o,t.$attrs=i.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){Ot(!1);for(var l=t._props,f=t.$options._propKeys||[],p=0;p<f.length;p++){var d=f[p],h=t.$options.props;l[d]=Ht(d,h,e,t)}Ot(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,wn(t,r,v),c&&(t.$slots=Oe(o,i.context),t.$forceUpdate())}function jn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Dn(t,e){if(e){if(t._directInactive=!1,jn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);Pn(t,"activated")}}function En(t,e){if((!e||(t._directInactive=!0,!jn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)En(t.$children[n]);Pn(t,"deactivated")}}function Pn(t,e){pt();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,o=n.length;i<o;i++)Yt(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),dt()}var Tn=[],In=[],Cn={},Nn=!1,qn=!1,Rn=0;function Un(){Rn=Tn.length=In.length=0,Cn={},Nn=qn=!1}var zn=Date.now;if(K&&!Q){var Mn=window.performance;Mn&&"function"===typeof Mn.now&&zn()>document.createEvent("Event").timeStamp&&(zn=function(){return Mn.now()})}function Bn(){var t,e;for(zn(),qn=!0,Tn.sort(function(t,e){return t.id-e.id}),Rn=0;Rn<Tn.length;Rn++)t=Tn[Rn],t.before&&t.before(),e=t.id,Cn[e]=null,t.run();var n=In.slice(),r=Tn.slice();Un(),Ln(n),Vn(r),ot&&B.devtools&&ot.emit("flush")}function Vn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Pn(r,"updated")}}function Fn(t){t._inactive=!1,In.push(t)}function Ln(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Dn(t[e],!0)}function Hn(t){var e=t.id;if(null==Cn[e]){if(Cn[e]=!0,qn){var n=Tn.length-1;while(n>Rn&&Tn[n].id>t.id)n--;Tn.splice(n+1,0,t)}else Tn.push(t);Nn||(Nn=!0,ue(Bn))}}var Jn=0,Wn=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Jn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=J(e),this.getter||(this.getter=I)),this.value=this.lazy?void 0:this.get()};Wn.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(ei){if(!this.user)throw ei;Xt(ei,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&le(t),dt(),this.cleanupDeps()}return t},Wn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Wn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Wn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Hn(this)},Wn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(ei){Xt(ei,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Wn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Wn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Wn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Gn={enumerable:!0,configurable:!0,get:I,set:I};function Kn(t,e,n){Gn.get=function(){return this[e][n]},Gn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Gn)}function Xn(t){t._watchers=[];var e=t.$options;e.props&&Yn(t,e.props),e.methods&&or(t,e.methods),e.data?Zn(t):jt(t._data={},!0),e.computed&&er(t,e.computed),e.watch&&e.watch!==nt&&ar(t,e.watch)}function Yn(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;o||Ot(!1);var a=function(o){i.push(o);var a=Ht(o,e,n,t);Dt(r,o,a),o in t||Kn(t,"_props",o)};for(var s in e)a(s);Ot(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?Qn(e,t):e||{},l(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];0,r&&b(r,o)||F(o)||Kn(t,"_data",o)}jt(e,!0)}function Qn(t,e){pt();try{return t.call(e,e)}catch(ei){return Xt(ei,e,"data()"),{}}finally{dt()}}var tr={lazy:!0};function er(t,e){var n=t._computedWatchers=Object.create(null),r=it();for(var i in e){var o=e[i],a="function"===typeof o?o:o.get;0,r||(n[i]=new Wn(t,a||I,I,tr)),i in t||nr(t,i,o)}}function nr(t,e,n){var r=!it();"function"===typeof n?(Gn.get=r?rr(e):ir(n),Gn.set=I):(Gn.get=n.get?r&&!1!==n.cache?rr(e):ir(n.get):I,Gn.set=n.set||I),Object.defineProperty(t,e,Gn)}function rr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ft.SharedObject.target&&e.depend(),e.value}}function ir(t){return function(){return t.call(this,this)}}function or(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?I:D(e[n],t)}function ar(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)sr(t,n,r[i]);else sr(t,n,r)}}function sr(t,e,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function ur(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Et,t.prototype.$delete=Pt,t.prototype.$watch=function(t,e,n){var r=this;if(l(e))return sr(r,t,e,n);n=n||{},n.user=!0;var i=new Wn(r,t,e,n);if(n.immediate)try{e.call(r,i.value)}catch(o){Xt(o,r,'callback for immediate watcher "'+i.expression+'"')}return function(){i.teardown()}}}var cr=0;function lr(t){t.prototype._init=function(t){var e=this;e._uid=cr++,e._isVue=!0,t&&t._isComponent?fr(e,t):e.$options=Ft(pr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,xn(e),yn(e),un(e),Pn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&$e(e),Xn(e),"mp-toutiao"!==e.mpHost&&we(e),"mp-toutiao"!==e.mpHost&&Pn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function fr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function pr(t){var e=t.options;if(t.super){var n=pr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=dr(t);i&&P(t.extendOptions,i),e=t.options=Ft(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function dr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function hr(t){this._init(t)}function vr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=E(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function _r(t){t.mixin=function(t){return this.options=Ft(this.options,t),this}}function yr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Ft(n.options,t),a["super"]=n,a.options.props&&gr(a),a.options.computed&&mr(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,z.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=P({},a.options),i[r]=a,a}}function gr(t){var e=t.options.props;for(var n in e)Kn(t.prototype,"_props",n)}function mr(t){var e=t.options.computed;for(var n in e)nr(t.prototype,n,e[n])}function br(t){z.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function wr(t){return t&&(t.Ctor.options.name||t.tag)}function $r(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!f(t)&&t.test(e)}function Sr(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var a=n[o];if(a){var s=wr(a.componentOptions);s&&!e(s)&&Or(n,o,r,i)}}}function Or(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,g(n,e)}lr(hr),ur(hr),$n(hr),An(hr),fn(hr);var xr=[String,RegExp,Array],Ar={name:"keep-alive",abstract:!0,props:{include:xr,exclude:xr,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Or(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Sr(t,function(t){return $r(e,t)})}),this.$watch("exclude",function(e){Sr(t,function(t){return!$r(e,t)})})},render:function(){var t=this.$slots.default,e=_n(t),n=e&&e.componentOptions;if(n){var r=wr(n),i=this,o=i.include,a=i.exclude;if(o&&(!r||!$r(o,r))||a&&r&&$r(a,r))return e;var s=this,u=s.cache,c=s.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;u[l]?(e.componentInstance=u[l].componentInstance,g(c,l),c.push(l)):(u[l]=e,c.push(l),this.max&&c.length>parseInt(this.max)&&Or(u,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},kr={KeepAlive:Ar};function jr(t){var e={get:function(){return B}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:P,mergeOptions:Ft,defineReactive:Dt},t.set=Et,t.delete=Pt,t.nextTick=ue,t.observable=function(t){return jt(t),t},t.options=Object.create(null),z.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,P(t.options.components,kr),vr(t),_r(t),yr(t),br(t)}jr(hr),Object.defineProperty(hr.prototype,"$isServer",{get:it}),Object.defineProperty(hr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(hr,"FunctionalRenderContext",{value:Le}),hr.version="2.6.10";var Dr="[object Array]",Er="[object Object]";function Pr(t,e){var n={};return Tr(t,e),Ir(t,e,"",n),n}function Tr(t,e){if(t!==e){var n=Nr(t),r=Nr(e);if(n==Er&&r==Er){if(Object.keys(t).length>=Object.keys(e).length)for(var i in e){var o=t[i];void 0===o?t[i]=null:Tr(o,e[i])}}else n==Dr&&r==Dr&&t.length>=e.length&&e.forEach(function(e,n){Tr(t[n],e)})}}function Ir(t,e,n,r){if(t!==e){var i=Nr(t),o=Nr(e);if(i==Er)if(o!=Er||Object.keys(t).length<Object.keys(e).length)Cr(r,n,t);else{var a=function(i){var o=t[i],a=e[i],s=Nr(o),u=Nr(a);if(s!=Dr&&s!=Er)o!=e[i]&&Cr(r,(""==n?"":n+".")+i,o);else if(s==Dr)u!=Dr?Cr(r,(""==n?"":n+".")+i,o):o.length<a.length?Cr(r,(""==n?"":n+".")+i,o):o.forEach(function(t,e){Ir(t,a[e],(""==n?"":n+".")+i+"["+e+"]",r)});else if(s==Er)if(u!=Er||Object.keys(o).length<Object.keys(a).length)Cr(r,(""==n?"":n+".")+i,o);else for(var c in o)Ir(o[c],a[c],(""==n?"":n+".")+i+"."+c,r)};for(var s in t)a(s)}else i==Dr?o!=Dr?Cr(r,n,t):t.length<e.length?Cr(r,n,t):t.forEach(function(t,i){Ir(t,e[i],n+"["+i+"]",r)}):Cr(r,n,t)}}function Cr(t,e,n){t[e]=n}function Nr(t){return Object.prototype.toString.call(t)}function qr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Rr(t){return Tn.find(function(e){return t._watcher===e})}function Ur(t,e){if(!t.__next_tick_pending&&!Rr(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ue(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var i;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(ei){Xt(ei,t,"nextTick")}else i&&i(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){i=t})}function zr(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Mr=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,i=Object.create(null);try{i=zr(this)}catch(s){console.error(s)}i.__webviewId__=r.data.__webviewId__;var o=Object.create(null);Object.keys(i).forEach(function(t){o[t]=r.data[t]});var a=Pr(i,o);Object.keys(a).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,qr(n)})):qr(this)}};function Br(){}function Vr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Br),t.$options.render||(t.$options.render=Br),"mp-toutiao"!==t.mpHost&&Pn(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Wn(t,r,I,{before:function(){t._isMounted&&!t._isDestroyed&&Pn(t,"beforeUpdate")}},!0),n=!1,t}function Fr(t,e){return i(t)||i(e)?Lr(t,Hr(e)):""}function Lr(t,e){return t?e?t+" "+e:t:e||""}function Hr(t){return Array.isArray(t)?Jr(t):u(t)?Wr(t):"string"===typeof t?t:""}function Jr(t){for(var e,n="",r=0,o=t.length;r<o;r++)i(e=Hr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Wr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Gr=w(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Kr(t){return Array.isArray(t)?T(t):"string"===typeof t?Gr(t):t}var Xr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Yr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Yr(t[r],n.slice(1).join("."))}function Zr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:E(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Ur(this,t)},Xr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=we,t.prototype.__init_injections=$e,t.prototype.__call_hook=function(t,e){var n=this;pt();var r,i=n.$options[t],o=t+" hook";if(i)for(var a=0,s=i.length;a<s;a++)r=Yt(i[a],n,e?[e]:null,n,o);return n._hasHookEvent&&n.$emit("hook:"+t),dt(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return l(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Yr(e||this,t)},t.prototype.__get_class=function(t,e){return Fr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Kr(t),r=e?P(e,n):n;return Object.keys(r).map(function(t){return A(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,i,o,a;if(Array.isArray(t)){for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);return n}if(u(t)){for(o=Object.keys(t),n=Object.create(null),r=0,i=o.length;r<i;r++)a=o[r],n[a]=e(t[a],a,r);return n}return[]}}var Qr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function ti(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==Qr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;Qr.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=Qr}hr.prototype.__patch__=Mr,hr.prototype.$mount=function(t,e){return Vr(this,t,e)},ti(hr),Zr(hr),e["default"]=hr}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=he,e.createComponent=Oe,e.createPage=Se,e.default=void 0;var r=i(n("66fd"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return u(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(u){i=!0,o=u}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw o}}return n}function u(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){return d(t)||p(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function d(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var h=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function _(t){return"function"===typeof t}function y(t){return"string"===typeof t}function g(t){return"[object Object]"===h.call(t)}function m(t,e){return v.call(t,e)}function b(){}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var $=/-(\w)/g,S=w(function(t){return t.replace($,function(t,e){return e?e.toUpperCase():""})}),O=["invoke","success","fail","complete","returnValue"],x={},A={};function k(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?j(n):n}function j(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function D(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function E(t,e){Object.keys(e).forEach(function(n){-1!==O.indexOf(n)&&_(e[n])&&(t[n]=k(t[n],e[n]))})}function P(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==O.indexOf(n)&&_(e[n])&&D(t[n],e[n])})}function T(t,e){"string"===typeof t&&g(e)?E(A[t]||(A[t]={}),e):g(t)&&E(x,t)}function I(t,e){"string"===typeof t?g(e)?P(A[t],e):delete A[t]:g(t)&&P(x,t)}function C(t){return function(e){return t(e)||e}}function N(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function q(t,e){for(var n=!1,r=0;r<t.length;r++){var i=t[r];if(n)n=Promise.then(C(i));else{var o=i(e);if(N(o)&&(n=Promise.resolve(o)),!1===o)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function R(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){q(t[n],e).then(function(t){return _(r)&&r(t)||t})}}}),e}function U(t,e){var n=[];Array.isArray(x.returnValue)&&n.push.apply(n,l(x.returnValue));var r=A[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,l(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function z(t){var e=Object.create(null);Object.keys(x).forEach(function(t){"returnValue"!==t&&(e[t]=x[t].slice())});var n=A[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function M(t,e,n){for(var r=arguments.length,i=new Array(r>3?r-3:0),o=3;o<r;o++)i[o-3]=arguments[o];var a=z(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=q(a.invoke,n);return s.then(function(t){return e.apply(void 0,[R(a,t)].concat(i))})}return e.apply(void 0,[R(a,n)].concat(i))}return e.apply(void 0,[n].concat(i))}var B={returnValue:function(t){return N(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},V=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,F=/^create|Manager$/,L=/^on/;function H(t){return F.test(t)}function J(t){return V.test(t)}function W(t){return L.test(t)}function G(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function K(t){return!(H(t)||J(t)||W(t))}function X(t,e){return K(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return _(n.success)||_(n.fail)||_(n.complete)?U(t,M.apply(void 0,[t,e,n].concat(i))):U(t,G(new Promise(function(r,o){M.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:o})].concat(i)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var Y=1e-4,Z=750,Q=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,Q="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Z*(e||tt);return n<0&&(n=-n),n=Math.floor(n+Y),0===n?1!==et&&Q?.5:1:t<0?-n:n}var it={promiseInterceptor:B},ot=Object.freeze({upx2px:rt,interceptors:it,addInterceptor:T,removeInterceptor:I}),at={},st=[],ut=[],ct=["success","fail","cancel","complete"];function lt(t,e,n){return function(r){return e(pt(t,r,n))}}function ft(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(g(e)){var o=!0===i?e:{};for(var a in _(n)&&(n=n(e,o)||{}),e)if(m(n,a)){var s=n[a];_(s)&&(s=s(e[a],e,o)),s?y(s)?o[s]=e[a]:g(s)&&(o[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ct.indexOf(a)?o[a]=lt(t,e[a],r):i||(o[a]=e[a]);return o}return _(e)&&(e=lt(t,e,r)),e}function pt(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return _(at.returnValue)&&(e=at.returnValue(t,e)),ft(t,e,n,{},r)}function dt(t,e){if(m(at,t)){var n=at[t];return n?function(e,r){var i=n;_(n)&&(i=n(e)),e=ft(t,e,i.args,i.returnValue);var o=[e];"undefined"!==typeof r&&o.push(r);var a=wx[i.name||t].apply(wx,o);return J(t)?pt(t,a,i.returnValue,H(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var ht=Object.create(null),vt=["subscribePush","unsubscribePush","onPush","offPush","share"];function _t(t){return function(e){var n=e.fail,r=e.complete,i={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};_(n)&&n(i),_(r)&&r(i)}}vt.forEach(function(t){ht[t]=_t(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function gt(t,e,n){return t[e].apply(t,n)}function mt(){return gt(yt(),"$on",Array.prototype.slice.call(arguments))}function bt(){return gt(yt(),"$off",Array.prototype.slice.call(arguments))}function wt(){return gt(yt(),"$once",Array.prototype.slice.call(arguments))}function $t(){return gt(yt(),"$emit",Array.prototype.slice.call(arguments))}var St=Object.freeze({$on:mt,$off:bt,$once:wt,$emit:$t});function Ot(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r=plus.webview.getWebviewById(t.__uniapp_mask_id);r=r.parent()||r;var i=t.show,o=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},u=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.hide=function(){u();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.close=function(){u(),e=[];for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a.apply(t,r)}}}function xt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&Ot(e),e}function At(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}var kt=Object.freeze({requireNativePlugin:At,getSubNVueById:xt}),jt=Page,Dt=Component,Et=/:/g,Pt=w(function(t){return S(t.replace(Et,"-"))});function Tt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return e.apply(t,[Pt(n)].concat(i))}}}function It(t,e){var n=e[t];e[t]=n?function(){Tt(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Tt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return It("onLoad",t),jt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return It("created",t),Dt(t)};var Ct=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Nt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){m(n,e)&&(t[e]=n[e])})}function qt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,_(e))return!!_(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(_(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return qt(t,e)}):void 0}function Rt(t,e,n){e.forEach(function(e){qt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Ut(t,e){var n;return e=e.default||e,_(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function zt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Mt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Bt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(i){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(i){}return g(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||m(n,t)||(n[t]=r[t])}),n}var Vt=[String,Number,Boolean,Object,Array,null];function Ft(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Lt(t,e){var n=t["behaviors"],r=t["extends"],i=t["mixins"],o=t["props"];o||(t["props"]=o=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]={type:String,default:""},o["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),g(r)&&r.props&&a.push(e({properties:Jt(r.props,!0)})),Array.isArray(i)&&i.forEach(function(t){g(t)&&t.props&&a.push(e({properties:Jt(t.props,!0)}))}),a}function Ht(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Jt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Ft(t)}}):g(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(g(r)){var i=r["default"];_(i)&&(i=i()),r.type=Ht(e,r.type),n[e]={type:-1!==Vt.indexOf(r.type)?r.type:null,value:i,observer:Ft(e)}}else{var o=Ht(e,r);n[e]={type:-1!==Vt.indexOf(o)?o:null,observer:Ft(e)}}}),n}function Wt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=b,t.preventDefault=b,t.target=t.target||{},m(t,"detail")||(t.detail={}),g(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Gt(t,e){var n=t;return e.forEach(function(e){var r=e[0],i=e[2];if(r||"undefined"!==typeof i){var o=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=i:o?Array.isArray(s)?n=s.find(function(e){return t.__get_value(o,e)===i}):g(s)?n=Object.keys(s).find(function(e){return t.__get_value(o,s[e])===i}):console.error("v-for 暂不支持循环数据：",s):n=s[i],a&&(n=t.__get_value(a,n))}}),n}function Kt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,i){"string"===typeof e?e?"$event"===e?r["$"+i]=n:0===e.indexOf("$event.")?r["$"+i]=t.__get_value(e.replace("$event.",""),n):r["$"+i]=t.__get_value(e):r["$"+i]=t:r["$"+i]=Gt(t,e)}),r}function Xt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Yt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,a=!1;if(i&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Kt(t,r,e),u=[];return n.forEach(function(t){"$event"===t?"__set_model"!==o||i?i&&!a?u.push(e.detail.__args__[0]):u.push(e):u.push(e.target.value):Array.isArray(t)&&"o"===t[0]?u.push(Xt(t)):"string"===typeof t&&m(s,t)?u.push(s[t]):u.push(t)}),u}var Zt="~",Qt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Wt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var i=t.type,o=[];return r.forEach(function(n){var r=n[0],a=n[1],s=r.charAt(0)===Qt;r=s?r.slice(1):r;var u=r.charAt(0)===Zt;r=u?r.slice(1):r,a&&te(i,r)&&a.forEach(function(n){var r=n[0];if(r){var i=e.$vm;i.$options.generic&&i.$parent&&i.$parent.$parent&&(i=i.$parent.$parent);var a=i[r];if(!_(a))throw new Error(" _vm.".concat(r," is not a function"));if(u){if(a.once)return;a.once=!0}o.push(a.apply(i,Yt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===i&&1===o.length&&"undefined"!==typeof o[0]?o[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,i=e.initRefs;t.$options.store&&(r.default.prototype.$store=t.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(i(this),Nt(this,n)))}});var o={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return o.globalData=t.$options.globalData||{},Rt(o,ne),o}var ie=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function oe(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var i=n.length-1;i>=0;i--)if(r=oe(n[i],e),r)return r}function ae(t){return Behavior(t)}function se(){return!!this.route}function ue(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function le(t){var e,n=t.detail||t.value,r=n.vuePid,i=n.vueOptions;r&&(e=oe(this.$vm,r)),e||(e=this.$vm),i.parent=e}function fe(t){return re(t,{mocks:ie,initRefs:ce})}var pe=["onUniNViewMessage"];function de(t){var e=fe(t);return Rt(e,pe),e}function he(t){return App(de(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,i=e.initRelation,a=Ut(r.default,t),s=o(a,2),u=s[0],c=s[1],l={options:{multipleSlots:!0,addGlobalClass:!0},data:Bt(c,r.default.prototype),behaviors:Lt(c,ae),properties:Jt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Mt(t.vueId,this),i.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new u(e),zt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:le,__e:ee}};return Array.isArray(c.wxsCallMethods)&&c.wxsCallMethods.forEach(function(t){l.methods[t]=function(e){return this.$vm[t](e)}}),n?l:[l,u]}function _e(t){return ve(t,{isPage:se,initRelation:ue})}function ye(t){var e=_e(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var ge=["onShow","onHide","onUnload"];function me(t,e){e.isPage,e.initRelation;var n=ye(t);return Rt(n.methods,ge,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function be(t){return me(t,{isPage:se,initRelation:ue})}ge.push.apply(ge,Ct);var we=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function $e(t){var e=be(t);return Rt(e.methods,we),e}function Se(t){return Component($e(t))}function Oe(t){return Component(ye(t))}st.forEach(function(t){at[t]=!1}),ut.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var xe={};Object.keys(ot).forEach(function(t){xe[t]=ot[t]}),Object.keys(St).forEach(function(t){xe[t]=St[t]}),Object.keys(kt).forEach(function(t){xe[t]=X(t,kt[t])}),Object.keys(wx).forEach(function(t){(m(wx,t)||m(at,t))&&(xe[t]=X(t,dt(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=xe,t.UniEmitter=St),wx.createApp=he,wx.createPage=Se,wx.createComponent=Oe;var Ae=xe,ke=Ae;e.default=ke}).call(this,n("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23320190923002",_inBundle:!1,_integrity:"sha512-MnftsvgOac3q1FCOBPzivbFn8GNQFo7D2DY325HeEZyFCWgx5GEwHpGYjT1PQU6v7DaDn0ruxa3ObdpUIYbmZw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23320190923002.tgz",_shasum:"0c400c140ca0b3c05f52d25f11583cf05a0c4e9a",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"fed4c73fb9142a1b277dd79313939cad90693d3e",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23320190923002"}},"86b8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pages:{"pages/index/index":{},"pages/main/main":{},"pages/catalog/catalog":{},"pages/order/order":{},"pages/user/user":{},"pages/share/share":{},"pages/settlement/settlement":{},"pages/catalogSecond/catalogSecond":{},"pages/porder/porder":{}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"汇骏护理",navigationBarBackgroundColor:"white",backgroundColor:"white"}};e.default=r},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function r(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?i(t):e}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var f=e.version,p="https://tongji.dcloud.io/uni/stat",d="https://tongji.dcloud.io/uni/stat.gif",h=1800,v=300,_=10,y="__DC_STAT_UUID",g="__DC_UUID_VALUE";function m(){var e="";if("n"===S()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(y)}catch(n){e=g}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(n){t.setStorageSync(y,g)}}return e}var b=function(t){var e=Object.keys(t),n=e.sort(),r={},i="";for(var o in n)r[n[o]]=t[n[o]],i+=n[o]+"="+t[n[o]]+"&";return{sign:"",options:i.substr(0,i.length-1)}},w=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},$=function(){return parseInt((new Date).getTime()/1e3)},S=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},O=function(){var e="";return"wx"!==S()&&"qq"!==S()||(e=t.getAccountInfoSync().miniProgram.appId||""),e},x=function(){return"n"===S()?plus.runtime.version:""},A=function(){var t=S(),e="";return"n"===t&&(e=plus.runtime.channel),e},k=function(e){var n=S(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},j="First__Visit__Time",D="Last__Visit__Time",E=function(){var e=t.getStorageSync(j),n=0;return e?n=e:(n=$(),t.setStorageSync(j,n),t.removeStorageSync(D)),n},P=function(){var e=t.getStorageSync(D),n=0;return n=e||"",t.setStorageSync(D,$()),n},T="__page__residence__time",I=0,C=0,N=function(){return I=$(),"n"===S()&&t.setStorageSync(T,$()),I},q=function(){return C=$(),"n"===S()&&(I=t.getStorageSync(T)),C-I},R="Total__Visit__Count",U=function(){var e=t.getStorageSync(R),n=1;return e&&(n=e,n++),t.setStorageSync(R,n),n},z=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},M=0,B=0,V=function(){var t=(new Date).getTime();return M=t,B=0,t},F=function(){var t=(new Date).getTime();return B=t,t},L=function(t){var e=0;if(0!==M&&(e=B-M),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>v;return{residenceTime:e,overtime:n}}if("page"===t){var r=e>h;return{residenceTime:e,overtime:r}}return{residenceTime:e}},H=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===S()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},J=function(t){var e=getCurrentPages(),n=e[e.length-1],r=n.$vm,i=t._query,o=i&&"{}"!==JSON.stringify(i)?"?"+JSON.stringify(i):"";return t._query="","bd"===S()?r.$mp&&r.$mp.page.is+o:r.$scope&&r.$scope.route+o||r.$mp&&r.$mp.page.route+o},W=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},G=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},K=n("86b8").default,X=n("e8b5").default||n("e8b5"),Y=t.getSystemInfoSync(),Z=function(){function e(){u(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:S(),mpn:O(),ak:X.appid,usv:f,v:x(),ch:A(),cn:"",pn:"",ct:"",t:$(),tt:"",p:"android"===Y.platform?"a":"i",brand:Y.brand||"",md:Y.model,sv:Y.system.replace(/(Android|iOS)\s/,""),mpsdk:Y.SDKVersion||"",mpv:Y.version||"",lang:Y.language,pr:Y.pixelRatio,ww:Y.windowWidth,wh:Y.windowHeight,sw:Y.screenWidth,sh:Y.screenHeight}}return l(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){F();var t=L("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,F();var n=L();V();var r=J(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=J(this),e=H();if(this._navigationBarTitle.config=K&&K.pages[e]&&K.pages[e].titleNView&&K.pages[e].titleNView.titleText||K&&K.pages[e]&&K.pages[e].navigationBarTitleText||"",this.__licationShow)return V(),this.__licationShow=!1,void(this._lastPageRoute=t);F(),this._lastPageRoute=t;var n=L("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}V()}},{key:"_pageHide",value:function(){if(!this.__licationHide){F();var t=L("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=$(),this.statData.sc=k(t.scene),this.statData.fvts=E(),this.statData.lvts=P(),this.statData.tvc=U(),"n"===S()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(i)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,r=t.urlref_ts,i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(i,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,r=t.value,i=void 0===r?"":r,o=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:o,ch:this.statData.ch,e_n:n,e_v:"object"===typeof i?JSON.stringify(i):i.toString(),usv:this.statData.usv,t:$(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;X.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,i=$(),o=this._navigationBarTitle;e.ttn=o.page,e.ttpj=o.config,e.ttc=o.report;var a=this._reportingRequestData;if("n"===S()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===S()&&t.setStorageSync("__UNI__STAT__DATA",a),!(q()<_)||n){var s=this._reportingRequestData;"n"===S()&&(s=t.getStorageSync("__UNI__STAT__DATA")),N();var u=[],c=[],l=[],p=function(t){var e=s[t];e.forEach(function(e){var n=w(e);0===t?u.push(n):3===t?l.push(n):c.push(n)})};for(var d in s)p(d);u.push.apply(u,c.concat(l));var h={usv:f,t:i,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===S()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==S()||"a"!==this.statData.p?this._sendRequest(h):setTimeout(function(){r._sendRequest(h)},200):this.imageRequest(h)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:p,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=b(z(t)).options;e.src=d+"?"+n}},{key:"sendEvent",value:function(t,e){G(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Q=function(e){function n(){var e;return u(this,n),e=r(this,o(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(n,e),l(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),l(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,N(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,W(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,W(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(n)}}]),n}(Z),tt=Q.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function rt(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}rt()}).call(this,n("6e42")["default"])},a096:function(t,e,n){"use strict";(function(e){var n=function(t,n,r,i){arguments.length>4&&void 0!==arguments[4]&&arguments[4];e.showLoading({title:"加载中"}),e.showLoading({title:"加载中"})},r=function(t,e,n,r,i){},i=function(t,e,r){n(t,"/customers","GET",e,r)},o=function(t,e,n){var i='<?xml version="1.0" encoding="UTF-8"?>\n            <prestashop xmlns:xlink="http://www.w3.org/1999/xlink">\n                <customer>\n                <active required="true" format="isBool">1</active>\n                    <lastname required="true" maxSize="32" format="isName">'+n.lastname+'</lastname>\n                    <firstname required="true" maxSize="32" format="isName">'+n.firstname+'</firstname>\n                    <email required="true" maxSize="128" format="isEmail">email@icare.com</email>\n                    <passwd required="true" maxSize="32" format="isPasswd">passwdpasswd</passwd>\n                    <id_gender format="isUnsignedId">'+n.id_gender+'</id_gender>\n                    <birthday format="isBirthDate">'+n.birthday+'</birthday>\n                    <user_name maxSize="200">'+n.user_name+'</user_name>\n                    <phone required="true" maxSize="200">'+n.phone+'</phone>\n                    <occupation required="true" maxSize="3000">'+n.occupation+'</occupation>\n                    <living_status required="true" maxSize="200">'+n.living_status+'</living_status>\n                    <home_type required="true" maxSize="200">'+n.home_type+'</home_type>\n                    <health_status required="true" maxSize="200">'+n.health_status+'</health_status>\n                    <special_care required="true" maxSize="200">'+n.special_care+'</special_care>\n                    <special_care_detail maxSize="3000">'+n.special_care_detail+'</special_care_detail>\n                    <id_global_demand required="true">'+n.id_global_demand+'</id_global_demand>\n                    <login_type>1</login_type>\n                    <address required="true">'+n.address+"</address>\n                </customer>\n            </prestashop>";r(t,"/customers","POST",e,i)},a=function(t,e,n){var i='<?xml version="1.0" encoding="UTF-8"?>\n            <prestashop xmlns:xlink="http://www.w3.org/1999/xlink">\n                <address>\n                    <id_customer required="true" format="isNullOrUnsignedId">'+n.id+'</id_customer>\n                    <id_country required="true" format="isUnsignedId">5</id_country>\n                    <alias required="true" maxSize="32" format="isGenericName">email@icare.com</alias>\n                    <lastname required="true" maxSize="32" format="isName">'+n.lastname+'</lastname>\n                    <firstname required="true" maxSize="32" format="isName">'+n.firstname+'</firstname>\n                    <address1 required="true" maxSize="128" format="isAddress">'+n.address+'</address1>\n                    <phone maxSize="32" format="isPhoneNumber">'+n.phone+'</phone>\n                    <phone_mobile maxSize="32" format="isPhoneNumber">phone_mobile</phone_mobile>\n                    <id_gender required="true">'+n.id_gender+'</id_gender>\n                    <birthday required="true" format="isDate">'+n.birthday+'</birthday>\n                    <id_global_demand required="true">'+n.id_global_demand+'</id_global_demand>\n                    <occupation maxSize="3000">'+n.occupation+'</occupation>\n                    <living_status maxSize="200">'+n.living_status+'</living_status>\n                    <home_type maxSize="200">'+n.home_type+'</home_type>\n                    <health_status maxSize="200">'+n.health_status+'</health_status>\n                    <health_status_detail maxSize="3000">health_status_detail</health_status_detail>\n                    <special_care maxSize="200">'+n.special_care+'</special_care>\n                    <special_care_detail maxSize="3000">'+n.special_care_detail+'</special_care_detail>\n                    <relationship maxSize="200">'+n.relationship+"</relationship>\n                </address>\n            </prestashop>";r(t,"/addresses","POST",e,i)},s=function(t,e,r){n(t,"/global_demand","GET",e,r)},u=function(t,e,r){n(t,"/addresses/"+r.id,"DELETE",e)},c=function(t,e,n){var i='<?xml version="1.0" encoding="UTF-8"?>\n<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">\n    <customer>\n    \t<id required="true">'+n.id+'</id>\n        <lastname required="true" maxSize="32" format="isName">'+n.lastname+'</lastname>\n        <firstname required="true" maxSize="32" format="isName">'+n.firstname+'</firstname>\n        <id_gender format="isUnsignedId">'+n.id_gender+'</id_gender>\n        <birthday format="isBirthDate">'+n.birthday+'</birthday>\n        <phone required="true" maxSize="3000">'+n.phone+'</phone>\n        <occupation required="true" maxSize="3000">'+n.occupation+'</occupation>\n        <living_status required="true" maxSize="200">'+n.living_status+'</living_status>\n        <home_type required="true" maxSize="200">'+n.home_type+'</home_type>\n        <health_status required="true" maxSize="200">'+n.health_status+'</health_status>\n        <health_status_detail maxSize="3000"> ["长期病患", "长期病患1", "长期病患2", "长期病患3"] </health_status_detail>       \n\t\t<special_care required="true" maxSize="200">'+n.special_care+'</special_care>\n        <special_care_detail maxSize="3000">'+n.special_care_detail+'</special_care_detail>\n        <id_global_demand required="true">'+n.id_global_demand+'</id_global_demand>\n\t\t<address required="true">'+n.address+"</address>\n        <login_type>1</login_type>\n    </customer>\n</prestashop>\n";r(t,"/customers","PUT",e,i)},l=function(t,e,n){var i='<?xml version="1.0" encoding="UTF-8"?>\n<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">\n    <address>\n        <id required="true" format="isNullOrUnsignedId">'+n.id+'</id>\n        <id_customer required="true" format="isNullOrUnsignedId">'+n.main+'</id_customer>\n        <alias required="true" >email@icare.com</alias>\n        <id_country required="true" format="isUnsignedId">5</id_country>\n        <lastname required="true" maxSize="32" format="isName">'+n.lastname+'</lastname>\n        <firstname required="true" maxSize="32" format="isName">'+n.firstname+'</firstname>\n        <address1 required="true" maxSize="128" format="isAddress">'+n.address+'</address1>\n        <phone maxSize="32" format="isPhoneNumber">'+n.phone+'</phone>\n        <phone_mobile maxSize="32" format="isPhoneNumber">phone_mobile111</phone_mobile>\n        <id_gender required="true">'+n.id_gender+'</id_gender>\n        <birthday required="true" format="isDate">'+n.birthday+'</birthday>\n        <id_global_demand required="true">'+n.id_global_demand+'</id_global_demand>\n        <occupation maxSize="3000">'+n.occupation+'</occupation>\n        <living_status maxSize="200">'+n.living_status+'</living_status>\n        <home_type maxSize="200">'+n.home_type+'</home_type>\n        <health_status maxSize="200">'+n.health_status+'</health_status>\n        <health_status_detail maxSize="3000">health_status_detail111</health_status_detail>\n        <special_care maxSize="200">'+n.special_care+'</special_care>\n        <special_care_detail maxSize="3000">'+n.special_care_detail+'</special_care_detail>\n        <relationship maxSize="200">'+n.relationship+"</relationship>\n    </address>\n</prestashop>";r(t,"/addresses","PUT",e,i)};t.exports={getCustomer:i,createCustomer:o,getArea:s,addCustomer:a,deleteUser:u,updateUser:c,updateMember:l}}).call(this,n("6e42")["default"])},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},e8b5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={appid:"__UNI__8AA30E8"};e.default=r},faf8:function(t,e,n){}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/uni-popup/uni-popup';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-popup/uni-popup.js';

define('components/uni-popup/uni-popup.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-popup/uni-popup"], {
  "0222": function _(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  "15d8": function d8(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("0222"),
        u = e("fb83");

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    e("7a0a");
    var a = e("2877"),
        c = Object(a["a"])(u["default"], o["a"], o["b"], !1, null, null, null);
    n["default"] = c.exports;
  },
  "7a0a": function a0a(t, n, e) {
    "use strict";

    var o = e("ef29"),
        u = e.n(o);
    u.a;
  },
  d75a: function d75a(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var o = {
      name: "UniPopup",
      props: {
        animation: {
          type: Boolean,
          default: !0
        },
        type: {
          type: String,
          default: "center"
        },
        custom: {
          type: Boolean,
          default: !1
        },
        maskClick: {
          type: Boolean,
          default: !0
        },
        show: {
          type: Boolean,
          default: !0
        }
      },
      data: function data() {
        return {
          ani: "",
          showPopup: !1
        };
      },
      watch: {
        show: function show(t) {
          t ? this.open() : this.close();
        }
      },
      created: function created() {},
      methods: {
        clear: function clear() {},
        open: function open() {
          var t = this;
          this.$emit("change", {
            show: !0
          }), this.showPopup = !0, this.$nextTick(function () {
            setTimeout(function () {
              t.ani = "uni-" + t.type;
            }, 30);
          });
        },
        close: function close(t) {
          var n = this;
          !this.maskClick && t || (this.$emit("change", {
            show: !1
          }), this.ani = "", this.$nextTick(function () {
            setTimeout(function () {
              n.showPopup = !1;
            }, 300);
          }));
        }
      }
    };
    n.default = o;
  },
  ef29: function ef29(t, n, e) {},
  fb83: function fb83(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("d75a"),
        u = e.n(o);

    for (var i in o) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(i);
    }

    n["default"] = u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-popup/uni-popup-create-component', {
  'components/uni-popup/uni-popup-create-component': function componentsUniPopupUniPopupCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("15d8"));
  }
}, [['components/uni-popup/uni-popup-create-component']]]);
});
require('components/uni-popup/uni-popup.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"002b":function(n,e,t){"use strict";t.r(e);var i=t("72c6"),u=t.n(i);for(var o in i)"default"!==o&&function(n){t.d(e,n,function(){return i[n]})}(o);e["default"]=u.a},6895:function(n,e,t){"use strict";var i=t("a5d9"),u=t.n(i);u.a},"72c6":function(n,e,t){"use strict";(function(n,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;u(t("a096")),u(t("3680"));function u(n){return n&&n.__esModule?n:{default:n}}var o={data:function(){return{}},onLoad:function(){},methods:{getuserinfo:function(e){e.detail.iv&&n.login({provider:"weixin",success:function(n){var e=n.code;console.log(i(e," at pages/index/index.vue:53"))}})},appWxLogin:function(){n.getProvider({service:"oauth",success:function(e){e.provider.indexOf("weixin")?n.login({provider:"weixin",success:function(n){console.log(i(n," at pages/index/index.vue:67"))}}):n.showToast({title:"请先安装微信",image:"../../static/info-icon.png",duration:2e3})}})},h5WxLogin:function(){n.switchTab({url:"/pages/main/main"})}}};e.default=o}).call(this,t("6e42")["default"],t("0de9")["default"])},a5d9:function(n,e,t){},a76f:function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement;n._self._c},u=[];t.d(e,"a",function(){return i}),t.d(e,"b",function(){return u})},b114:function(n,e,t){"use strict";(function(n){t("faf8"),t("921b");i(t("66fd"));var e=i(t("ca28"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},ca28:function(n,e,t){"use strict";t.r(e);var i=t("a76f"),u=t("002b");for(var o in u)"default"!==o&&function(n){t.d(e,n,function(){return u[n]})}(o);t("6895");var a=t("2877"),c=Object(a["a"])(u["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports}},[["b114","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/main/main';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main/main.js';

define('pages/main/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/main"],{"0a43":function(n,t,e){"use strict";e.r(t);var u=e("6c7d"),a=e("9dc4");for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);var f=e("2877"),c=Object(f["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},"6c7d":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a})},"7fda":function(n,t,e){"use strict";(function(n){e("faf8"),e("921b");u(e("66fd"));var t=u(e("0a43"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"9dc4":function(n,t,e){"use strict";e.r(t);var u=e("f9be"),a=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=a.a},f9be:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},methods:{}};t.default=u}},[["7fda","common/runtime","common/vendor"]]]);
});
require('pages/main/main.js');
__wxRoute = 'pages/catalog/catalog';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/catalog/catalog.js';

define('pages/catalog/catalog.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/catalog/catalog"],{1742:function(t,n,e){"use strict";var a=e("a3f9"),u=e.n(a);u.a},"43ff":function(t,n,e){"use strict";e.r(n);var a=e("d082"),u=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);n["default"]=u.a},a3f9:function(t,n,e){},d082:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},methods:{bindCareTap:function(n){var e=n.currentTarget.dataset.care;t.navigateTo({url:"/pages/catalogSecond/catalogSecond?care="+e})}}};n.default=e}).call(this,e("6e42")["default"])},d600:function(t,n,e){"use strict";e.r(n);var a=e("ded1"),u=e("43ff");for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);e("1742");var c=e("2877"),f=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=f.exports},ded1:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})},fd02:function(t,n,e){"use strict";(function(t){e("faf8"),e("921b");a(e("66fd"));var n=a(e("d600"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])}},[["fd02","common/runtime","common/vendor"]]]);
});
require('pages/catalog/catalog.js');
__wxRoute = 'pages/order/order';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/order.js';

define('pages/order/order.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/order"],{"0fda":function(t,e,n){"use strict";(function(t){n("faf8"),n("921b");a(n("66fd"));var e=a(n("2f6e"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"2f6e":function(t,e,n){"use strict";n.r(e);var a=n("dbdb"),u=n("c75b");for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);n("a1fe");var f=n("2877"),c=Object(f["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},"7c6f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},methods:{submitForm:function(e){var n="/pages/settlement/settlement?region=盐田区&ycode=sddf&title=晚晴关怀&total=500&service=4小时&butBol=false&start=2019-10-19&time=15:00&userName=李四&address=地址2";t.navigateTo({url:n})}}};e.default=n}).call(this,n("6e42")["default"])},a1fe:function(t,e,n){"use strict";var a=n("c8fa"),u=n.n(a);u.a},c75b:function(t,e,n){"use strict";n.r(e);var a=n("7c6f"),u=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=u.a},c8fa:function(t,e,n){},dbdb:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})}},[["0fda","common/runtime","common/vendor"]]]);
});
require('pages/order/order.js');
__wxRoute = 'pages/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/user.js';

define('pages/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"9ce7":function(e,t,n){"use strict";n.r(t);var u=n("a28a"),a=n("de1c");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);var c=n("2877"),o=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},a28a:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return a})},a42e:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},methods:{}};t.default=u},d304:function(e,t,n){"use strict";(function(e){n("faf8"),n("921b");u(n("66fd"));var t=u(n("9ce7"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},de1c:function(e,t,n){"use strict";n.r(t);var u=n("a42e"),a=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,function(){return u[e]})}(r);t["default"]=a.a}},[["d304","common/runtime","common/vendor"]]]);
});
require('pages/user/user.js');
__wxRoute = 'pages/share/share';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/share/share.js';

define('pages/share/share.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/share/share"],{"35d0":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"15d8"))},o={data:function(){return{}},methods:{bindCallUser:function(t){n.makePhoneCall({phoneNumber:"4008386681"})},bindCustomer:function(){this.$refs.popup.open()},closePopup:function(){this.$refs.popup.close()}},components:{uniPopup:u}};t.default=o}).call(this,e("6e42")["default"])},"701c":function(n,t,e){},"97a7":function(n,t,e){"use strict";e.r(t);var u=e("35d0"),o=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=o.a},b49f:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return o})},c045:function(n,t,e){"use strict";e.r(t);var u=e("b49f"),o=e("97a7");for(var c in o)"default"!==c&&function(n){e.d(t,n,function(){return o[n]})}(c);e("ecc2");var r=e("2877"),f=Object(r["a"])(o["default"],u["a"],u["b"],!1,null,null,null);t["default"]=f.exports},cff0:function(n,t,e){"use strict";(function(n){e("faf8"),e("921b");u(e("66fd"));var t=u(e("c045"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},ecc2:function(n,t,e){"use strict";var u=e("701c"),o=e.n(u);o.a}},[["cff0","common/runtime","common/vendor"]]]);
});
require('pages/share/share.js');
__wxRoute = 'pages/settlement/settlement';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/settlement/settlement.js';

define('pages/settlement/settlement.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/settlement/settlement"],{"2da7":function(t,e,n){"use strict";n.r(e);var a=n("763d"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a},5055:function(t,e,n){},6472:function(t,e,n){"use strict";n.r(e);var a=n("674f"),o=n("2da7");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("a159");var i=n("2877"),r=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},6566:function(t,e,n){"use strict";(function(t){n("faf8"),n("921b");a(n("66fd"));var e=a(n("6472"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"674f":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"763d":function(t,e,n){"use strict";(function(t,n){var a;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{region:"",ycode:"",start:"",title:"",flag:!0,total:"",discount:0,service:"",butBol:!0,time:"",userName:"",address:""}},onLoad:function(t){a=this,void 0!=t.butBol&&(a.butBol=!1);var e=0;""!=t.ycode&&(e=50);var n=Number(t.total);n=n+50-e,a.start=t.start,a.region=t.region,a.ycode=t.ycode,a.title=t.title,a.total=n,a.discount=e,a.service=t.service,a.time=t.time,a.userName=t.userName,a.address=t.address},methods:{bindSubmit:function(){var e=a.total;t.showModal({title:"提示",content:"总价:"+e+"元,是否提交订单？",success:function(e){e.confirm?t.showToast({title:"提交成功",image:"../../static/info-icon.png",duration:2e3}):e.cancel&&console.log(n("用户点击取消"," at pages/settlement/settlement.vue:112"))}})}}};e.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])},a159:function(t,e,n){"use strict";var a=n("5055"),o=n.n(a);o.a}},[["6566","common/runtime","common/vendor"]]]);
});
require('pages/settlement/settlement.js');
__wxRoute = 'pages/catalogSecond/catalogSecond';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/catalogSecond/catalogSecond.js';

define('pages/catalogSecond/catalogSecond.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/catalogSecond/catalogSecond"],{"169d":function(e,t,c){"use strict";var n=c("709e"),u=c.n(n);u.a},"37a4":function(e,t,c){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},u=[];c.d(t,"a",function(){return n}),c.d(t,"b",function(){return u})},"52b9":function(e,t,c){"use strict";c.r(t);var n=c("ad87"),u=c.n(n);for(var a in n)"default"!==a&&function(e){c.d(t,e,function(){return n[e]})}(a);t["default"]=u.a},"709e":function(e,t,c){},"9ec0":function(e,t,c){"use strict";c.r(t);var n=c("37a4"),u=c("52b9");for(var a in u)"default"!==a&&function(e){c.d(t,e,function(){return u[e]})}(a);c("169d");var r=c("2877"),o=Object(r["a"])(u["default"],n["a"],n["b"],!1,null,null,null);t["default"]=o.exports},ad87:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{flag:!0,title:"",care:1,products:[]}},onLoad:function(e){this;var t="",c=[],n={};"1"==e.care||"2"==e.care?("1"==e.care?(t="基础护理",n={value:1,content:"老人照护(针对失能或半失能老人提供卧床擦浴、洗头等基本生活护理、及日常照护和营养指导、心理疏导、用药指导)",checked:!1},c.push(n)):(t="临床护理",n={value:2,content:"病患照护(针对因病患者离开医院回家休养康复提供卧床擦浴、洗头等基本生活护理、及日常照护和营养指导、心理疏导、灵性关怀)",checked:!1},c.push(n)),n={value:3,content:"晚晴关怀(生活护理与指导;心理疏导;专业护理和指导;疼痛护理和指导;灵性关怀)",checked:!1},c.push(n),n={value:4,content:"陪诊陪护(全程陪诊、协助挂号、取药、帮组梳理病情、给予用药指导)",checked:!1},c.push(n),n={value:5,content:"康复护理(协助功能锻炼、肢体康复按摩)",checked:!1},c.push(n),n={value:6,content:"慢病管理(高血压、糖尿病、肺心病等患者生命体征测量和记录，整理常规用药及并发症的预防指导)",checked:!0},c.push(n)):"3"==e.care&&(t="特别护理",n={value:8,content:"压疮护理(压仓的风险预防、分级评估;初期压疮的护理、换药及局部皮肤的按摩)",checked:!1},c.push(n),n={value:9,content:"伤口换药(上门观察伤口情況, 作相应处理; 保持创面清洁, 清除伤口異物, 保持和防止伤口受损和外來感染。促进组织生长伤口愈合)",checked:!1},c.push(n)),n={value:7,content:"健康规划(个性化护理记录，检测健康进度，提供健康规划指导)",checked:!0},c.push(n),this.title=t,this.products=c,this.care=e.care},methods:{productChange:function(e){if(3!=this.care){if(4==e||5==e)return;this.products[e].checked=!this.products[e].checked}else{if(2==e)return;this.products[e].checked=!this.products[e].checked}},bindCareTap:function(e){var t=e.currentTarget.dataset.care;wx.navigateTo({url:"/pages/porder/porder?care="+t+"&title="+this.title})}}};t.default=n},ef3e:function(e,t,c){"use strict";(function(e){c("faf8"),c("921b");n(c("66fd"));var t=n(c("9ec0"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,c("6e42")["createPage"])}},[["ef3e","common/runtime","common/vendor"]]]);
});
require('pages/catalogSecond/catalogSecond.js');
__wxRoute = 'pages/porder/porder';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/porder/porder.js';

define('pages/porder/porder.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/porder/porder"],{"06df":function(t,e,a){"use strict";a.r(e);var n=a("f3d7"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},"25b9":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},5787:function(t,e,a){"use strict";(function(t){a("faf8"),a("921b");n(a("66fd"));var e=n(a("678b"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"678b":function(t,e,a){"use strict";a.r(e);var n=a("25b9"),i=a("06df");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("e011");var s=a("2877"),o=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},e011:function(t,e,a){"use strict";var n=a("e93f"),i=a.n(n);i.a},e93f:function(t,e,a){},f3d7:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("3680"));function i(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{care:0,flag:!0,radioItems:[{name:"500/4小时",value:"0",total:500,checked:!0},{name:"280/2小时",value:"1",total:280,checked:!1}],dateStart:n.default.dateAddDay(1),start:n.default.dateAddDay(1),end:n.default.dateAddDay(31),total:500,regions:["a","b"],regionIndex:0,ycode:"",title:"",service:"4小时",time:"11:00",titles1:"",titles2:"",infoUsers:["本人"],infoUserIndex:0,address:"",bntDis:!1}},onLoad:function(t){this;var e="当天下单",a="当天服务";if(1!=t.care)e="预约下单",a="预订时间服务";else{var i=new Date;i.getHours()>15&&(this.bntDis=!0),this.dateStart=n.default.getToday()}this.care=t.care,this.title=t.title,this.titles1=e,this.titles2=a;var r=getApp().globalData.users;if(r.length>2)for(var s=2;s<r.length;s++){var o=r[s].lastname+r[s].firstname;this.infoUsers.push(o)}},methods:{radioChange:function(t){for(var e=0;e<this.radioItems.length;e++)this.radioItems[e].checked=t==e},bindInfoUserChange:function(t){this.infoUserIndex=t.target.value},bindRegionChange:function(t){this.regionIndex=t.target.value},bindTimeChange:function(t){this.time=t.target.value},bindDateChange:function(t){this.dateStart=t.target.value},submitForm:function(){if(1==this.care){var e=new Date,a=new Date(n.default.getToday()+" "+this.time),i=e.getTime(),r=a.getTime(),s=r-i,o=Math.round(s/6e4);if(o<180)return void t.showToast({title:"服务需提前3小时预订",image:"../../static/info-icon.png",duration:2e3})}var d="aaaa",u="/pages/settlement/settlement?region="+this.regions[this.regionIndex]+"&ycode="+this.ycode+"&title="+this.title+"&total="+this.total+"&service="+this.service+"&start="+this.dateStart+"&time="+this.time+"&userName="+d+"&address="+this.address;t.navigateTo({url:u})}}};e.default=r}).call(this,a("6e42")["default"])}},[["5787","common/runtime","common/vendor"]]]);
});
require('pages/porder/porder.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

