import{c as e,i as t,n,o as r,s as i}from"./index-DsHdBuKh.js";import{buildHtml as a,n as o,t as s}from"./exportHtml-DzISXDhK.js";var c=Uint8Array,l=Uint16Array,u=Int32Array,d=new c([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),f=new c([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),p=new c([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),m=function(e,t){for(var n=new l(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new u(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},h=m(d,2),g=h.b,_=h.r;g[28]=258,_[258]=28;var v=m(f,0);v.b;for(var y=v.r,b=new l(32768),x=0;x<32768;++x){var S=(x&43690)>>1|(x&21845)<<1;S=(S&52428)>>2|(S&13107)<<2,S=(S&61680)>>4|(S&3855)<<4,b[x]=((S&65280)>>8|(S&255)<<8)>>1}for(var C=(function(e,t,n){for(var r=e.length,i=0,a=new l(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new l(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new l(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var u=i<<4|e[i],d=t-e[i],f=o[e[i]-1]++<<d,p=f|(1<<d)-1;f<=p;++f)s[b[f]>>c]=u}else for(s=new l(r),i=0;i<r;++i)e[i]&&(s[i]=b[o[e[i]-1]++]>>15-e[i]);return s}),w=new c(288),x=0;x<144;++x)w[x]=8;for(var x=144;x<256;++x)w[x]=9;for(var x=256;x<280;++x)w[x]=7;for(var x=280;x<288;++x)w[x]=8;for(var T=new c(32),x=0;x<32;++x)T[x]=5;var ee=C(w,9,0),E=C(T,5,0),te=function(e){return(e+7)/8|0},D=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new c(e.subarray(t,n))},O=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],k=function(e,t,n){var r=Error(t||O[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,k),!n)throw r;return r},A=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8},j=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8,e[r+2]|=n>>16},M=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]});var i=n.length,a=n.slice();if(!i)return{t:L,l:0};if(i==1){var o=new c(n[0].s+1);return o[n[0].s]=1,{t:o,l:1}}n.sort(function(e,t){return e.f-t.f}),n.push({s:-1,f:25001});var s=n[0],u=n[1],d=0,f=1,p=2;for(n[0]={s:-1,f:s.f+u.f,l:s,r:u};f!=i-1;)s=n[n[d].f<n[p].f?d++:p++],u=n[d!=f&&n[d].f<n[p].f?d++:p++],n[f++]={s:-1,f:s.f+u.f,l:s,r:u};for(var m=a[0].s,r=1;r<i;++r)a[r].s>m&&(m=a[r].s);var h=new l(m+1),g=N(n[f-1],h,0);if(g>t){var r=0,_=0,v=g-t,y=1<<v;for(a.sort(function(e,t){return h[t.s]-h[e.s]||e.f-t.f});r<i;++r){var b=a[r].s;if(h[b]>t)_+=y-(1<<g-h[b]),h[b]=t;else break}for(_>>=v;_>0;){var x=a[r].s;h[x]<t?_-=1<<t-h[x]++-1:++r}for(;r>=0&&_;--r){var S=a[r].s;h[S]==t&&(--h[S],++_)}g=t}return{t:new c(h),l:g}},N=function(e,t,n){return e.s==-1?Math.max(N(e.l,t,n+1),N(e.r,t,n+1)):t[e.s]=n},P=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new l(++t),r=0,i=e[0],a=1,o=function(e){n[r++]=e},s=1;s<=t;++s)if(e[s]==i&&s!=t)++a;else{if(!i&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(i),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(i);a=1,i=e[s]}return{c:n.subarray(0,r),n:t}},F=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r];return n},ne=function(e,t,n){var r=n.length,i=te(t+2);e[i]=r&255,e[i+1]=r>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var a=0;a<r;++a)e[i+a+4]=n[a];return(i+4+r)*8},I=function(e,t,n,r,i,a,o,s,c,u,m){A(t,m++,n),++i[256];for(var h=M(i,15),g=h.t,_=h.l,v=M(a,15),y=v.t,b=v.l,x=P(g),S=x.c,te=x.n,D=P(y),O=D.c,k=D.n,N=new l(19),I=0;I<S.length;++I)++N[S[I]&31];for(var I=0;I<O.length;++I)++N[O[I]&31];for(var re=M(N,7),L=re.t,R=re.l,z=19;z>4&&!L[p[z-1]];--z);var B=u+5<<3,V=F(i,w)+F(a,T)+o,H=F(i,g)+F(a,y)+o+14+3*z+F(N,L)+2*N[16]+3*N[17]+7*N[18];if(c>=0&&B<=V&&B<=H)return ne(t,m,e.subarray(c,c+u));var U,W,G,K;if(A(t,m,1+(H<V)),m+=2,H<V){U=C(g,_,0),W=g,G=C(y,b,0),K=y;var ie=C(L,R,0);A(t,m,te-257),A(t,m+5,k-1),A(t,m+10,z-4),m+=14;for(var I=0;I<z;++I)A(t,m+3*I,L[p[I]]);m+=3*z;for(var q=[S,O],J=0;J<2;++J)for(var Y=q[J],I=0;I<Y.length;++I){var X=Y[I]&31;A(t,m,ie[X]),m+=L[X],X>15&&(A(t,m,Y[I]>>5&127),m+=Y[I]>>12)}}else U=ee,W=w,G=E,K=T;for(var I=0;I<s;++I){var Z=r[I];if(Z>255){var X=Z>>18&31;j(t,m,U[X+257]),m+=W[X+257],X>7&&(A(t,m,Z>>23&31),m+=d[X]);var Q=Z&31;j(t,m,G[Q]),m+=K[Q],Q>3&&(j(t,m,Z>>5&8191),m+=f[Q])}else j(t,m,U[Z]),m+=W[Z]}return j(t,m,U[256]),m+W[256]},re=new u([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),L=new c(0),R=function(e,t,n,r,i,a){var o=a.z||e.length,s=new c(r+o+5*(1+Math.ceil(o/7e3))+i),p=s.subarray(r,s.length-i),m=a.l,h=(a.r||0)&7;if(t){h&&(p[0]=a.r>>3);for(var g=re[t-1],v=g>>13,b=g&8191,x=(1<<n)-1,S=a.p||new l(32768),C=a.h||new l(x+1),w=Math.ceil(n/3),T=2*w,ee=function(t){return(e[t]^e[t+1]<<w^e[t+2]<<T)&x},E=new u(25e3),O=new l(288),k=new l(32),A=0,j=0,M=a.i||0,N=0,P=a.w||0,F=0;M+2<o;++M){var L=ee(M),R=M&32767,z=C[L];if(S[R]=z,C[L]=R,P<=M){var B=o-M;if((A>7e3||N>24576)&&(B>423||!m)){h=I(e,p,0,E,O,k,j,N,F,M-F,h),N=A=j=0,F=M;for(var V=0;V<286;++V)O[V]=0;for(var V=0;V<30;++V)k[V]=0}var H=2,U=0,W=b,G=R-z&32767;if(B>2&&L==ee(M-G))for(var K=Math.min(v,B)-1,ie=Math.min(32767,M),q=Math.min(258,B);G<=ie&&--W&&R!=z;){if(e[M+H]==e[M+H-G]){for(var J=0;J<q&&e[M+J]==e[M+J-G];++J);if(J>H){if(H=J,U=G,J>K)break;for(var Y=Math.min(G,J-2),X=0,V=0;V<Y;++V){var Z=M-G+V&32767,Q=Z-S[Z]&32767;Q>X&&(X=Q,z=Z)}}}R=z,z=S[R],G+=R-z&32767}if(U){E[N++]=268435456|_[H]<<18|y[U];var ae=_[H]&31,oe=y[U]&31;j+=d[ae]+f[oe],++O[257+ae],++k[oe],P=M+H,++A}else E[N++]=e[M],++O[e[M]]}}for(M=Math.max(M,P);M<o;++M)E[N++]=e[M],++O[e[M]];h=I(e,p,m,E,O,k,j,N,F,M-F,h),m||(a.r=h&7|p[h/8|0]<<3,h-=7,a.h=C,a.p=S,a.i=M,a.w=P)}else{for(var M=a.w||0;M<o+m;M+=65535){var se=M+65535;se>=o&&(p[h/8|0]=m,se=o),h=ne(p,h+1,e.subarray(M,se))}a.i=o}return D(s,0,r+te(h)+i)},z=(function(){for(var e=new Int32Array(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(n&1&&-306674912)^n>>>1;e[t]=n}return e})(),B=function(){var e=-1;return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=z[n&255^t[r]]^n>>>8;e=n},d:function(){return~e}}},V=function(e,t,n,r,i){if(!i&&(i={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),o=new c(a.length+e.length);o.set(a),o.set(e,a.length),e=o,i.w=a.length}return R(e,t.level==null?6:t.level,t.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,n,r,i)},H=function(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n},U=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8};function W(e,t){return V(e,t||{},0,0)}var G=function(e,t,n,r){for(var i in e){var a=e[i],o=t+i,s=r;Array.isArray(a)&&(s=H(r,a[1]),a=a[0]),ArrayBuffer.isView(a)?n[o]=[a,s]:(n[o+=`/`]=[new c(0),s],G(a,o,n,r))}},K=typeof TextEncoder<`u`&&new TextEncoder,ie=typeof TextDecoder<`u`&&new TextDecoder;try{ie.decode(L,{stream:!0})}catch{}function q(e,t){if(t){for(var n=new c(e.length),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return n}if(K)return K.encode(e);for(var i=e.length,a=new c(e.length+(e.length>>1)),o=0,s=function(e){a[o++]=e},r=0;r<i;++r){if(o+5>a.length){var l=new c(o+8+(i-r<<1));l.set(a),a=l}var u=e.charCodeAt(r);u<128||t?s(u):u<2048?(s(192|u>>6),s(128|u&63)):u>55295&&u<57344?(u=65536+(u&1047552)|e.charCodeAt(++r)&1023,s(240|u>>18),s(128|u>>12&63),s(128|u>>6&63),s(128|u&63)):(s(224|u>>12),s(128|u>>6&63),s(128|u&63))}return D(a,0,o)}var J=function(e){var t=0;if(e)for(var n in e){var r=e[n].length;r>65535&&k(9),t+=r+4}return t},Y=function(e,t,n,r,i,a,o,s){var c=r.length,l=n.extra,u=s&&s.length,d=J(l);U(e,t,o==null?67324752:33639248),t+=4,o!=null&&(e[t++]=20,e[t++]=n.os),e[t]=20,t+=2,e[t++]=n.flag<<1|(a<0&&8),e[t++]=i&&8,e[t++]=n.compression&255,e[t++]=n.compression>>8;var f=new Date(n.mtime==null?Date.now():n.mtime),p=f.getFullYear()-1980;if((p<0||p>119)&&k(10),U(e,t,p<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),t+=4,a!=-1&&(U(e,t,n.crc),U(e,t+4,a<0?-a-2:a),U(e,t+8,n.size)),U(e,t+12,c),U(e,t+14,d),t+=16,o!=null&&(U(e,t,u),U(e,t+6,n.attrs),U(e,t+10,o),t+=14),e.set(r,t),t+=c,d)for(var m in l){var h=l[m],g=h.length;U(e,t,+m),U(e,t+2,g),e.set(h,t+4),t+=4+g}return u&&(e.set(s,t),t+=u),t},X=function(e,t,n,r,i){U(e,t,101010256),U(e,t+8,n),U(e,t+10,n),U(e,t+12,r),U(e,t+16,i)};function Z(e,t){t||={};var n={},r=[];G(e,``,n,t);var i=0,a=0;for(var o in n){var s=n[o],l=s[0],u=s[1],d=u.level==0?0:8,f=q(o),p=f.length,m=u.comment,h=m&&q(m),g=h&&h.length,_=J(u.extra);p>65535&&k(11);var v=d?W(l,u):l,y=v.length,b=B();b.p(l),r.push(H(u,{size:l.length,crc:b.d(),c:v,f,m:h,u:p!=o.length||h&&m.length!=g,o:i,compression:d})),i+=30+p+_+y,a+=76+2*(p+_)+(g||0)+y}for(var x=new c(a+22),S=i,C=a-i,w=0;w<r.length;++w){var f=r[w];Y(x,f.o,f,f.f,f.u,f.c.length);var T=30+f.f.length+J(f.extra);x.set(f.c,f.o+T),Y(x,i,f,f.f,f.u,f.c.length,f.o,f.m),i+=16+T+(f.m?f.m.length:0)}return X(x,i,r.length,C,S),x}var Q={name:`landing-builder`,private:!0,version:`0.1.0`,type:`module`,scripts:{dev:`vite`,build:`tsc --noEmit && vite build`,preview:`vite preview`},dependencies:{fflate:`^0.8.3`,mammoth:`^1.13.0`,"pdfjs-dist":`^6.5.438`,react:`^19.3.1`,"react-dom":`^19.3.1`},devDependencies:{"@types/node":`^26.6.6`,"@types/react":`^19.3.0`,"@types/react-dom":`^19.3.0`,"@vitejs/plugin-react":`^6.3.0`,typescript:`^7.0.2`,vite:`^8.3.7`}},ae=`import type { Art, Landing } from '../model/landing';

export type AssetKey = Art | 'space';
export type ArtAssets = Record<AssetKey, string>;

/** Вторая иллюстрация в финальном блоке — слева, в пару к выбранной. */
export function finalCompanion(art: Art): Art {
  return art === 'book' ? 'pi' : 'book';
}

/** Какие картинки реально видны на странице при её лейаутах. */
export function usedAssets(landing: Landing): AssetKey[] {
  const keys = new Set<AssetKey>();
  for (const s of landing.sections) {
    if (s.type === 'hero') {
      if (s.theme === 'dark') keys.add('space');
      if (s.layout !== 'center') keys.add(s.art);
    } else if (s.type === 'text' && s.layout === 'media') {
      keys.add(s.art);
    } else if (s.type === 'finalCta') {
      keys.add('space');
      if (s.layout === 'art') {
        keys.add(s.art);
        keys.add(finalCompanion(s.art));
      }
    }
  }
  return [...keys];
}
`,oe=`import { createContext, useContext, type ComponentType, type ElementType, type ReactNode } from 'react';
import type { ActionKind, Cta, Section, TextField } from '../model/landing';
import type { ArtAssets } from './art';

/**
 * edit — редактор с правкой на месте;
 * preview — предпросмотр в редакторе (CTA открываются в новой вкладке);
 * export — опубликованная версия, скачиваемый HTML и проект для разработки.
 */
export type LandingMode = 'edit' | 'preview' | 'export';

export type { ArtAssets };

export interface TextProps {
  field: TextField;
  as?: ElementType;
  className?: string;
  /** Многострочные поля сохраняют переносы. */
  multiline?: boolean;
}

/**
 * Компоненты редактора. Передаются только в режиме edit, поэтому сам рендер
 * лендинга не зависит от конструктора и уходит разработчику как есть.
 */
export interface EditorKit {
  Text: ComponentType<Required<Omit<TextProps, 'className'>> & { className?: string }>;
  Cta: ComponentType<{ cta: Cta; className: string }>;
  /** Обёртка блока: выделение, тулбар и места вставки до и после. */
  Block: ComponentType<{ section: Section; index: number; count: number; children: ReactNode }>;
}

export interface LandingContextValue {
  mode: LandingMode;
  href: string;
  actionKind: ActionKind;
  assets: ArtAssets;
  editor?: EditorKit;
  /** Клик по кнопке: \`id\` совпадает с атрибутом data-analytics. */
  onCta?: (id: string, href: string) => void;
}

export const LandingContext = createContext<LandingContextValue | null>(null);

export function useLanding(): LandingContextValue {
  const ctx = useContext(LandingContext);
  if (!ctx) throw new Error('LandingContext is missing');
  return ctx;
}
`,se=`import type {
  FactItem, FactsSection, FaqItem, FaqSection, FinalCtaSection, HeroSection, Landing, QuoteSection, Section,
  StatItem, StatsSection, StepItem, StepsSection, TextField, TextSection,
} from '../model/landing';
import { isVisible } from '../model/landing';
import { finalCompanion } from './art';
import { LandingContext, useLanding, type LandingContextValue } from './context';
import { CtaButton, Text } from './Text';

interface Props {
  landing: Landing;
  ctx: Omit<LandingContextValue, 'href' | 'actionKind'>;
  /** Сколько секций уже «отрисовано» при сборке; остальные показываются каркасом. */
  reveal?: number;
}

export function LandingView({ landing, ctx, reveal }: Props) {
  const value: LandingContextValue = { ...ctx, href: landing.action.href, actionKind: landing.action.kind };
  const count = landing.sections.length;
  const shown = reveal ?? count;
  const Block = shown >= count ? ctx.editor?.Block : undefined;
  return (
    <LandingContext.Provider value={value}>
      <div className={\`lp lp--\${ctx.mode}\`} lang="ru">
        <main className="lp-page">
          {landing.sections.map((section, i) => {
            if (i >= shown) return <SectionSkeleton key={section.id} type={section.type} />;
            if (!Block) return <SectionView key={section.id} section={section} />;
            return (
              <Block key={section.id} section={section} index={i} count={count}>
                <SectionView section={section} />
              </Block>
            );
          })}
        </main>
      </div>
    </LandingContext.Provider>
  );
}

function SectionView({ section }: { section: Section }) {
  switch (section.type) {
    case 'hero':
      return <Hero section={section} />;
    case 'facts':
      return <Facts section={section} />;
    case 'steps':
      return <Steps section={section} />;
    case 'text':
      return <TextBlock section={section} />;
    case 'finalCta':
      return <FinalCta section={section} />;
    case 'faq':
      return <Faq section={section} />;
    case 'quote':
      return <Quote section={section} />;
    case 'stats':
      return <Stats section={section} />;
  }
}

/** В предпросмотре и HTML пустые необязательные элементы не выводятся. */
function useShow() {
  const { mode } = useLanding();
  return mode === 'edit';
}

function Hero({ section }: { section: HeroSection }) {
  const { assets } = useLanding();
  const edit = useShow();
  const badges = edit ? section.badges : section.badges.filter(isVisible);
  return (
    <section className={\`lp-hero lp-hero--\${section.theme} lp-hero--\${section.layout}\`} data-section={section.id}>
      <div className="lp-hero__bg" aria-hidden="true">
        {section.theme === 'dark' && <img className="lp-hero__space" src={assets.space} alt="" />}
        {section.layout !== 'center' && (
          <img className={\`lp-hero__art lp-hero__art--\${section.art}\`} src={assets[section.art]} alt="" />
        )}
      </div>
      <div className="lp-container lp-hero__content">
        {badges.length > 0 && (
          <ul className="lp-badges">
            {badges.map((b) => (
              <li key={b.id} className="lp-badge-item">
                <Text field={b} as="span" className="lp-badge" />
              </li>
            ))}
          </ul>
        )}
        <Text field={section.title} as="h1" className="lp-hero__title" multiline />
        <Text field={section.subtitle} as="p" className="lp-hero__subtitle" multiline />
        {section.cta && (
          <div className="lp-hero__actions">
            <CtaButton cta={section.cta} analytics="cta-hero" tone={section.theme === 'dark' ? 'on-dark' : 'brand'} />
          </div>
        )}
      </div>
    </section>
  );
}

function SectionTitle({ section }: { section: { title: TextField } }) {
  return <Text field={section.title} as="h2" className="lp-section__title" multiline />;
}

function factVisible(item: FactItem) {
  if (item.labeled) return isVisible(item.text) || Boolean(item.note && isVisible(item.note));
  return isVisible(item.accent) || isVisible(item.text) || Boolean(item.note && isVisible(item.note));
}

const FACTS_LIST: Record<FactsSection['layout'], string> = { grid: 'lp-cards', list: 'lp-list', timeline: 'lp-dates' };

function Facts({ section }: { section: FactsSection }) {
  const edit = useShow();
  const items = edit ? section.items : section.items.filter(factVisible);
  if (!items.length) return null;
  const list = FACTS_LIST[section.layout];
  const brand = section.variant === 'dates' || section.layout === 'timeline';
  return (
    <section className="lp-section" data-section={section.id}>
      <div className="lp-container">
        <SectionTitle section={section} />
        <ul className={list}>
          {items.map((item) => (
            <li key={item.id} className={\`\${list}__item\`}>
              <div className="lp-card">
                <Text field={item.accent} as="h3" className={brand ? 'lp-card__accent lp-card__accent--brand' : 'lp-card__accent'} />
                <div className="lp-card__body">
                  <Text field={item.text} as="p" className="lp-card__text" multiline />
                  {item.note && <Text field={item.note} as="p" className="lp-card__note" multiline />}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function stepVisible(item: StepItem) {
  return isVisible(item.title) || isVisible(item.text);
}

function Steps({ section }: { section: StepsSection }) {
  const edit = useShow();
  const items = edit ? section.items : section.items.filter(stepVisible);
  if (!items.length) return null;
  const program = section.variant === 'program';
  return (
    <section className="lp-section" data-section={section.id}>
      <div className="lp-container">
        <SectionTitle section={section} />
        {program && section.layout === 'column' ? (
          <ol className="lp-program">
            {items.map((item) => (
              <li key={item.id} className="lp-program__row">
                <Text field={item.title} as="span" className="lp-program__time" />
                <Text field={item.text} as="p" className="lp-program__text" multiline />
              </li>
            ))}
          </ol>
        ) : (
          <ol className={\`lp-steps lp-steps--\${section.layout}\`}>
            {items.map((item, i) => (
              <li key={item.id} className="lp-steps__item">
                <div className="lp-card lp-card--step">
                  {section.layout === 'column' && <span className="lp-steps__num" aria-hidden="true">{i + 1}</span>}
                  <div className="lp-card__body">
                    <Text
                      field={item.title}
                      as="h3"
                      className={program ? 'lp-card__title lp-card__title--brand' : 'lp-card__title'}
                      multiline
                    />
                    <Text field={item.text} as="p" className="lp-card__secondary" multiline />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        )}
        {section.note && <Text field={section.note} as="p" className="lp-section__note" multiline />}
        {section.cta && (
          <div className="lp-section__actions">
            <CtaButton cta={section.cta} analytics="cta-steps" />
          </div>
        )}
      </div>
    </section>
  );
}

function TextBlock({ section }: { section: TextSection }) {
  const { assets } = useLanding();
  const edit = useShow();
  const paragraphs = edit ? section.paragraphs : section.paragraphs.filter(isVisible);
  if (!paragraphs.length) return null;
  return (
    <section className="lp-section" data-section={section.id}>
      <div className={\`lp-container lp-text lp-text--\${section.layout}\`}>
        {section.layout === 'media' && <img className="lp-text__art" src={assets[section.art]} alt="" />}
        <SectionTitle section={section} />
        <div className="lp-text__body">
          {paragraphs.map((p) => (
            <Text key={p.id} field={p} as="p" className="lp-text__p" multiline />
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta({ section }: { section: FinalCtaSection }) {
  const { assets } = useLanding();
  return (
    <section className={\`lp-final lp-final--\${section.layout}\`} data-section={section.id}>
      <div className="lp-final__bg" aria-hidden="true">
        <img className="lp-final__space" src={assets.space} alt="" />
        {section.layout === 'art' && (
          <>
            <img className="lp-final__art lp-final__art--left" src={assets[finalCompanion(section.art)]} alt="" />
            <img className="lp-final__art lp-final__art--right" src={assets[section.art]} alt="" />
          </>
        )}
      </div>
      <div className="lp-container lp-final__content">
        <Text field={section.title} as="h2" className="lp-final__title" multiline />
        <Text field={section.text} as="p" className="lp-final__text" multiline />
        <div className="lp-final__actions">
          <CtaButton cta={section.cta} analytics="cta-final" tone="on-dark" />
        </div>
      </div>
    </section>
  );
}

function faqVisible(item: FaqItem) {
  return isVisible(item.question) || isVisible(item.answer);
}

function Faq({ section }: { section: FaqSection }) {
  const edit = useShow();
  const items = edit ? section.items : section.items.filter(faqVisible);
  if (!items.length) return null;
  return (
    <section className="lp-section" data-section={section.id}>
      <div className="lp-container">
        <SectionTitle section={section} />
        <dl className={\`lp-faq lp-faq--\${section.layout}\`}>
          {items.map((item) => (
            <div key={item.id} className="lp-faq__item lp-card">
              <Text field={item.question} as="dt" className="lp-faq__q" multiline />
              <Text field={item.answer} as="dd" className="lp-faq__a" multiline />
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Quote({ section }: { section: QuoteSection }) {
  const edit = useShow();
  if (!edit && !isVisible(section.text)) return null;
  const byline = edit || isVisible(section.name) || isVisible(section.role);
  return (
    <section className="lp-section" data-section={section.id}>
      <div className="lp-container">
        <figure className={\`lp-quote lp-quote--\${section.layout}\`}>
          <blockquote className="lp-quote__body">
            <Text field={section.text} as="p" className="lp-quote__text" multiline />
          </blockquote>
          {byline && (
            <figcaption className="lp-quote__by">
              <Text field={section.name} as="span" className="lp-quote__name" />
              <Text field={section.role} as="span" className="lp-quote__role" />
            </figcaption>
          )}
        </figure>
      </div>
    </section>
  );
}

function statVisible(item: StatItem) {
  return isVisible(item.value) || isVisible(item.label);
}

function Stats({ section }: { section: StatsSection }) {
  const edit = useShow();
  const items = edit ? section.items : section.items.filter(statVisible);
  if (!items.length) return null;
  return (
    <section className="lp-section" data-section={section.id}>
      <div className="lp-container">
        <SectionTitle section={section} />
        <ul className={\`lp-stats lp-stats--\${section.layout}\`}>
          {items.map((item) => (
            <li key={item.id} className="lp-stats__item">
              <Text field={item.value} as="span" className="lp-stats__value" />
              <Text field={item.label} as="span" className="lp-stats__label" multiline />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SectionSkeleton({ type }: { type: Section['type'] }) {
  if (type === 'hero') {
    return (
      <div className="lp-skeleton lp-skeleton--hero" aria-hidden="true">
        <div className="lp-container">
          <span className="lp-skel lp-skel--badge" />
          <span className="lp-skel lp-skel--h1" />
          <span className="lp-skel lp-skel--h1 lp-skel--short" />
          <span className="lp-skel lp-skel--p" />
          <span className="lp-skel lp-skel--btn" />
        </div>
      </div>
    );
  }
  return (
    <div className={\`lp-skeleton\${type === 'finalCta' ? ' lp-skeleton--final' : ''}\`} aria-hidden="true">
      <div className="lp-container">
        <span className="lp-skel lp-skel--h2" />
        <div className="lp-skel-row">
          <span className="lp-skel lp-skel--card" />
          <span className="lp-skel lp-skel--card" />
          <span className="lp-skel lp-skel--card" />
        </div>
      </div>
    </div>
  );
}
`,ce=`import { normalizeUrl, type Cta } from '../model/landing';
import { useLanding, type TextProps } from './context';

export function Text({ field, as: Tag = 'p', className, multiline = false }: TextProps) {
  const { editor } = useLanding();
  if (editor) return <editor.Text field={field} as={Tag} className={className} multiline={multiline} />;
  if (!field.text.trim()) return null;
  return <Tag className={className}>{field.text}</Tag>;
}

interface CtaProps {
  cta: Cta;
  /** Значение data-analytics: cta-hero, cta-steps, cta-final. */
  analytics: string;
  tone?: 'brand' | 'on-dark';
}

export function CtaButton({ cta, analytics, tone = 'brand' }: CtaProps) {
  const { editor, mode, href, onCta } = useLanding();
  const className = \`lp-btn lp-btn--\${tone}\`;
  if (editor) return <editor.Cta cta={cta} className={className} />;
  const url = normalizeUrl(href);
  if (!url) {
    return (
      <span className="lp-cta">
        <span className={\`\${className} is-disabled\`} aria-disabled="true" title="Ссылка для кнопки не указана">
          {cta.label.text}
        </span>
      </span>
    );
  }
  return (
    <span className="lp-cta">
      <a
        className={className}
        href={url}
        data-analytics={analytics}
        onClick={() => onCta?.(analytics, url)}
        {...(mode === 'preview' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {cta.label.text}
      </a>
    </span>
  );
}
`,le=`export type PageKind = 'campaign' | 'event' | 'info';

export type ActionKind = 'register' | 'participate' | 'link' | 'order' | 'download' | 'none';

/** Библиотека 3D-иллюстраций в стиле лендингов (src/assets/art). */
export const ART_IDS = ['bell', 'book', 'molecule', 'pi', 'star', 'cube', 'question', 'gift', 'calendar', 'trophy'] as const;
export type Art = (typeof ART_IDS)[number];

export const ART_LABEL: Record<Art, string> = {
  bell: 'Колокол',
  book: 'Книга',
  molecule: 'Молекула',
  pi: 'Пи',
  star: 'Звезда',
  cube: 'Кубик',
  question: 'Вопрос',
  gift: 'Подарок',
  calendar: 'Календарь',
  trophy: 'Кубок',
};

export type HeroLayout = 'split' | 'center' | 'cover';
export type FactsLayout = 'grid' | 'list' | 'timeline';
export type StepsLayout = 'row' | 'column';
export type TextLayout = 'single' | 'columns' | 'media';
export type FinalCtaLayout = 'art' | 'plain';
export type FaqLayout = 'list' | 'columns';
export type QuoteLayout = 'center' | 'card';
export type StatsLayout = 'row' | 'cards';

/** Любой текст на странице. Пустой \`text\` с \`placeholder\` — поле для заполнения. */
export interface TextField {
  id: string;
  text: string;
  placeholder?: string;
  /** Без этого поля страницу нельзя опубликовать. */
  required?: boolean;
}

export interface Cta {
  id: string;
  label: TextField;
}

export interface HeroSection {
  id: string;
  type: 'hero';
  layout: HeroLayout;
  theme: 'dark' | 'light';
  art: Art;
  badges: TextField[];
  title: TextField;
  subtitle: TextField;
  cta?: Cta;
}

export interface FactItem {
  id: string;
  accent: TextField;
  text: TextField;
  note?: TextField;
  /** accent — лишь подпись к значению: без text карточка вне редактора не показывается. */
  labeled?: boolean;
}

export interface FactsSection {
  id: string;
  type: 'facts';
  /** Смысл блока: \`dates\` — даты (акцент брендовым цветом), \`cards\` — факты. */
  variant: 'dates' | 'cards';
  layout: FactsLayout;
  title: TextField;
  items: FactItem[];
}

export interface StepItem {
  id: string;
  title: TextField;
  text: TextField;
}

export interface StepsSection {
  id: string;
  type: 'steps';
  /** \`program\` — расписание события: время слева, описание справа. */
  variant: 'steps' | 'program';
  layout: StepsLayout;
  title: TextField;
  items: StepItem[];
  note?: TextField;
  cta?: Cta;
}

export interface TextSection {
  id: string;
  type: 'text';
  layout: TextLayout;
  /** Картинка для лейаута \`media\`. */
  art: Art;
  title: TextField;
  paragraphs: TextField[];
}

export interface FinalCtaSection {
  id: string;
  type: 'finalCta';
  layout: FinalCtaLayout;
  art: Art;
  title: TextField;
  text: TextField;
  cta: Cta;
}

export interface FaqItem {
  id: string;
  question: TextField;
  answer: TextField;
}

export interface FaqSection {
  id: string;
  type: 'faq';
  layout: FaqLayout;
  title: TextField;
  items: FaqItem[];
}

export interface QuoteSection {
  id: string;
  type: 'quote';
  layout: QuoteLayout;
  text: TextField;
  name: TextField;
  role: TextField;
}

export interface StatItem {
  id: string;
  value: TextField;
  label: TextField;
}

export interface StatsSection {
  id: string;
  type: 'stats';
  layout: StatsLayout;
  title: TextField;
  items: StatItem[];
}

export type Section =
  | HeroSection
  | FactsSection
  | StepsSection
  | TextSection
  | FinalCtaSection
  | FaqSection
  | QuoteSection
  | StatsSection;
export type SectionType = Section['type'];

export interface Landing {
  id: string;
  kind: PageKind;
  name: string;
  /** Одна ссылка на все CTA страницы. */
  action: { kind: ActionKind; href: string };
  sections: Section[];
  createdAt: number;
  updatedAt: number;
}

export interface PublishedSnapshot {
  version: number;
  publishedAt: number;
  landing: Landing;
  /** Адрес страницы на локальном сервере публикации, если он доступен. */
  shareUrl?: string;
}

const isArt = (value: unknown): value is Art => ART_IDS.includes(value as Art);

/**
 * Проставляет лейаут и картинку по умолчанию. Нужна генератору и черновикам,
 * сохранённым до появления лейаутов.
 */
export function normalizeSection(section: Section): Section {
  const raw = section as { layout?: string; art?: unknown };
  const art = (fallback: Art) => (isArt(raw.art) ? raw.art : fallback);
  switch (section.type) {
    case 'hero':
      return { ...section, layout: section.layout ?? 'split', art: art('bell') };
    case 'facts': {
      const fallback = section.variant === 'dates' ? 'timeline' : 'grid';
      return { ...section, layout: section.layout ?? fallback };
    }
    case 'steps': {
      const fallback = section.variant === 'program' ? 'column' : 'row';
      return { ...section, layout: section.layout ?? fallback };
    }
    case 'text':
      return { ...section, layout: section.layout ?? 'single', art: art('book') };
    case 'finalCta':
      return { ...section, layout: section.layout ?? 'art', art: art('pi') };
    case 'faq':
      return { ...section, layout: section.layout ?? 'list' };
    case 'quote':
      return { ...section, layout: section.layout ?? 'center' };
    case 'stats':
      return { ...section, layout: section.layout ?? 'row' };
  }
}

export function normalizeLanding(landing: Landing): Landing {
  return { ...landing, sections: landing.sections.map(normalizeSection) };
}

export const PAGE_KIND_LABEL: Record<PageKind, string> = {
  campaign: 'Кампания',
  event: 'Событие',
  info: 'Информационная страница',
};

export const ACTION_LABEL: Record<ActionKind, string> = {
  register: 'Регистрация',
  participate: 'Участие',
  link: 'Переход по ссылке',
  order: 'Оформление заказа',
  download: 'Скачивание',
  none: 'Без кнопки — только информация',
};

function isTextField(value: unknown): value is TextField {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'text' in value &&
    typeof (value as TextField).text === 'string'
  );
}

function mapFields<T>(value: T, fn: (field: TextField) => TextField): T {
  if (Array.isArray(value)) return value.map((v) => mapFields(v, fn)) as T;
  if (isTextField(value)) return fn(value) as T;
  if (typeof value === 'object' && value !== null) {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) out[k] = mapFields(v, fn);
    return out as T;
  }
  return value;
}

export function updateField(landing: Landing, fieldId: string, text: string): Landing {
  return {
    ...landing,
    sections: mapFields(landing.sections, (f) => (f.id === fieldId ? { ...f, text } : f)),
    updatedAt: Date.now(),
  };
}

export function updateHref(landing: Landing, href: string): Landing {
  return { ...landing, action: { ...landing.action, href }, updatedAt: Date.now() };
}

export function hasCta(section: Section): Cta | undefined {
  if (section.type === 'hero' || section.type === 'steps') return section.cta;
  if (section.type === 'finalCta') return section.cta;
  return undefined;
}

export function landingCtas(landing: Landing): Cta[] {
  return landing.sections.map(hasCta).filter((c): c is Cta => Boolean(c));
}

export function isFilled(field?: TextField): boolean {
  return Boolean(field && field.text.trim());
}

/** Пустые необязательные поля не попадают в предпросмотр и HTML. */
export function isVisible(field?: TextField): field is TextField {
  return isFilled(field);
}

export function normalizeUrl(raw: string): string {
  const value = raw.trim();
  if (!value) return '';
  if (/^(https?:|mailto:|tel:)/i.test(value)) return value;
  if (/^[\\w.-]+\\.[a-zа-яё]{2,}(\\/|$|\\?|#)/i.test(value)) return \`https://\${value}\`;
  return value;
}

export function isValidUrl(raw: string): boolean {
  const value = normalizeUrl(raw);
  if (/^(mailto:|tel:)/i.test(value)) return value.length > 7;
  try {
    const url = new URL(value);
    return (url.protocol === 'http:' || url.protocol === 'https:') && url.hostname.includes('.');
  } catch {
    return false;
  }
}

export interface ValidationIssue {
  /** id текстового поля или \`href:<ctaId>\` для ссылки CTA. */
  target: string;
  kind: 'text' | 'href';
  message: string;
}

export function hrefTarget(ctaId: string): string {
  return \`href:\${ctaId}\`;
}

export function validateLanding(landing: Landing): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const walk = (value: unknown) => {
    if (Array.isArray(value)) return value.forEach(walk);
    if (isTextField(value)) {
      if (value.required && !value.text.trim()) {
        issues.push({
          target: value.id,
          kind: 'text',
          message: value.placeholder ? \`Заполните поле: \${value.placeholder}\` : 'Заполните обязательное поле',
        });
      }
      return;
    }
    if (typeof value === 'object' && value !== null) Object.values(value).forEach(walk);
  };

  let hrefChecked = false;
  for (const section of landing.sections) {
    walk(section);
    const cta = hasCta(section);
    // Ссылка общая для всех кнопок — достаточно одной подсказки у первой из них.
    if (!cta || hrefChecked) continue;
    hrefChecked = true;
    const href = landing.action.href.trim();
    const isRegistration = landing.action.kind === 'register';
    if (!href) {
      issues.push({
        target: hrefTarget(cta.id),
        kind: 'href',
        message: isRegistration ? 'Добавьте ссылку на регистрацию' : 'Добавьте ссылку для кнопки',
      });
    } else if (!isValidUrl(href)) {
      issues.push({
        target: hrefTarget(cta.id),
        kind: 'href',
        message: 'Проверьте адрес: нужна полная ссылка, например https://example.ru/registration',
      });
    }
  }
  return issues;
}

export function slugify(text: string): string {
  const map: Record<string, string> = {
    а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'e', ж: 'zh', з: 'z', и: 'i', й: 'y',
    к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f',
    х: 'h', ц: 'c', ч: 'ch', ш: 'sh', щ: 'sch', ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu', я: 'ya',
  };
  const slug = text
    .toLowerCase()
    .split('')
    .map((ch) => map[ch] ?? ch)
    .join('')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
  return slug || 'landing';
}

/** Постоянный адрес лендинга: новые версии публикуются по той же ссылке. */
export function shareSlug(landing: Landing): string {
  return \`\${slugify(landing.name.replace(/^Лендинг\\s*/, '')).slice(0, 50)}-\${landing.id.replace(/^lp_/, '')}\`;
}

/** Короткое имя для файлов: «Лендинг ко Дню учителя» → den-uchitelya. */
export function fileSlug(landing: Landing): string {
  return slugify(landing.name.replace(/^Лендинг\\s*/, '').replace(/^(ко?|для|о|об)\\s+/i, ''));
}

export function htmlFileName(snapshot: PublishedSnapshot): string {
  return \`\${fileSlug(snapshot.landing)}-v\${snapshot.version}.html\`;
}

export function handoffFileName(snapshot: PublishedSnapshot): string {
  return \`\${fileSlug(snapshot.landing)}-v\${snapshot.version}.zip\`;
}`,ue=Q.dependencies,$=Q.devDependencies,de={hero:`cta-hero`,steps:`cta-steps`,finalCta:`cta-final`};function fe(e){let t=e.sections.find(e=>e.type===`hero`);return{title:t?.type===`hero`&&t.title.text.replace(/\s+/g,` `).trim()||e.name,description:t?.type===`hero`?t.subtitle.text.replace(/\s+/g,` `).trim():``}}var pe=e=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]??e);function me(t){return[...new Set(t.sections.filter(e).map(e=>de[e.type]))]}function he(e){return`${JSON.stringify({name:e,private:!0,version:`1.0.0`,type:`module`,scripts:{dev:`vite`,build:`tsc --noEmit && vite build`,preview:`vite preview`},dependencies:{react:ue.react,"react-dom":ue[`react-dom`]},devDependencies:{"@types/react":$[`@types/react`],"@types/react-dom":$[`@types/react-dom`],"@vitejs/plugin-react":$[`@vitejs/plugin-react`],typescript:$.typescript,vite:$.vite}},null,2)}\n`}var ge=`{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "noEmit": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "resolveJsonModule": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "types": ["vite/client"]
  },
  "include": ["src", "vite.config.ts"]
}
`,_e=`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
`;function ve(e){let{title:t,description:n}=fe(e);return`<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${pe(t)}</title>
${n?`    <meta name="description" content="${pe(n)}" />\n`:``}    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"><\/script>
  </body>
</html>
`}var ye=`import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Landing } from './Landing';
import './styles/tokens.css';
import './styles/base.css';
import './styles/landing.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Landing />
  </StrictMode>,
);
`,be=`html,
body {
  margin: 0;
  padding: 0;
}
`;function xe(e){return`import { track } from './analytics';
${e.map(e=>`import ${e} from './assets/${e}.webp';`).join(`
`)}
import data from './landing.json';
import type { ArtAssets } from './landing/art';
import { LandingView } from './landing/LandingView';
import type { Landing as LandingData } from './model/landing';

const landing = data as unknown as LandingData;

/** Картинки, которых нет на странице, в пакет не входят. */
const none: ArtAssets = {
  bell: '', book: '', calendar: '', cube: '', gift: '', molecule: '', pi: '', question: '', space: '', star: '', trophy: '',
};
const assets: ArtAssets = { ...none${e.map(e=>`, ${e}`).join(``)} };

export function Landing() {
  return (
    <LandingView
      landing={landing}
      ctx={{ mode: 'export', assets, onCta: (id, href) => track('cta_click', { id, href }) }}
    />
  );
}
`}var Se=`/**
 * Единственная точка аналитики лендинга. Сейчас это заглушка: в режиме разработки
 * события пишутся в консоль. Подключите счётчик здесь — компоненты трогать не нужно.
 *
 * События:
 *   cta_click — клик по кнопке; data: { id: 'cta-hero' | 'cta-steps' | 'cta-final', href }
 */
export type AnalyticsEvent = 'cta_click';

export function track(event: AnalyticsEvent, data: Record<string, unknown> = {}): void {
  if (import.meta.env.DEV) console.info('[analytics]', event, data);
  // Яндекс Метрика: window.ym?.(COUNTER_ID, 'reachGoal', event, data);
  // Google Analytics 4: window.gtag?.('event', event, data);
}
`,Ce=`node_modules
dist
`;function we(e,t){return`# ${fe(e).title}

Лендинг из Конструктора лендингов, версия ${t.version}. Это готовый проект: в нём только сама страница, без редактора.

## Запуск

\`\`\`bash
npm install
npm run dev      # http://localhost:5173
npm run build    # статика в dist/ — её можно выкладывать на любой хостинг
\`\`\`

## Где что лежит

- \`src/landing.json\` — весь контент: тексты, ссылка кнопок, порядок блоков, лейауты, картинки.
- \`src/landing/\` и \`src/model/landing.ts\` — компоненты и типы, которые рисуют страницу (те же, что в конструкторе).
- \`src/styles/tokens.css\` — бренд-токены, \`src/styles/landing.css\` — стили блоков.
- \`src/analytics.ts\` — сюда подключается Метрика или GA.
- \`static/index.html\` — та же страница одним файлом, если React не нужен.

Инструкция для ИИ-ассистента — в \`AGENTS.md\`.
`}function Te(e,t){let n=me(e);return`# AGENTS.md

Инструкция для Claude, Cursor, Codex и других ассистентов, которые работают с этим проектом.

## Что это

Готовый лендинг «${fe(e).title}», собранный в Конструкторе лендингов (версия ${t.version}).
Проект на Vite + React + TypeScript. Визуал уже согласован: задача разработчика — подключить метрики,
при необходимости домен и деплой, а не перерисовывать страницу.

## Запуск

\`\`\`bash
npm install
npm run dev
npm run build   # результат в dist/, это обычная статика
\`\`\`

## Устройство

- \`src/main.tsx\` подключает стили и рендерит \`<Landing />\`.
- \`src/Landing.tsx\` читает \`src/landing.json\`, собирает карту картинок из \`src/assets/\` и передаёт всё в \`LandingView\`.
- \`src/landing/LandingView.tsx\` — рендер всех блоков. Тип блока — \`section.type\`, вид — \`section.layout\`.
- \`src/landing/Text.tsx\` — текст и кнопка. Пустые необязательные поля не выводятся.
- \`src/model/landing.ts\` — типы контента (\`Landing\`, \`Section\` и т. д.) и вспомогательные функции.
  Часть функций (проверки, slug) нужна конструктору и здесь не используется — это нормально.
- \`src/styles/tokens.css\` — бренд-токены (цвета, шрифт Onest, отступы, скругления).
- \`src/styles/landing.css\` — стили классов \`.lp-*\`. Адаптив сделан через container queries
  (\`container: lp\`, точки 1100px и 720px), а не через media queries.
- \`static/index.html\` — та же страница одним файлом со встроенными стилями и картинками.

## Что нельзя ломать

- Не меняйте вёрстку, классы \`.lp-*\` и токены без запроса дизайнера: страница должна совпадать с макетом из конструктора.
- Контент правится в \`src/landing.json\`, а не в компонентах. Структура JSON соответствует типам из \`src/model/landing.ts\`.
- Одна ссылка на все кнопки — \`action.href\` в \`landing.json\`.
- Атрибуты \`data-analytics\` на кнопках используются для целей аналитики — не удаляйте их.
- Компоненты в \`src/landing/\` поддерживают и режим редактора (\`ctx.editor\`). Здесь он не передаётся; эту ветку можно не трогать.

## Метрики

Всё подключается в \`src/analytics.ts\`: функция \`track(event, data)\` вызывается при каждом клике по кнопке
с событием \`cta_click\` и данными \`{ id, href }\`.

Кнопки на этой странице: ${n.length?n.map(e=>`\`${e}\``).join(`, `):`нет`}.

1. Добавьте код счётчика (Яндекс Метрика, GA4 и т. п.) в \`index.html\` перед \`</head>\`.
2. В \`track\` отправляйте цель, например \`window.ym(COUNTER_ID, 'reachGoal', data.id)\`.
3. Для \`static/index.html\` обработчика нет: повесьте слушатель на \`[data-analytics]\` в этом файле.
`}async function Ee(e){let{landing:i}=e,c=r(i),l=t(i),u=await Promise.all(l.map(async e=>[e,new Uint8Array(await(await n(e)).arrayBuffer())])),d=await a(e),f=e=>q(e),p={"AGENTS.md":f(Te(i,e)),"README.md":f(we(i,e)),"package.json":f(he(c)),"tsconfig.json":f(ge),"vite.config.ts":f(_e),"index.html":f(ve(i)),".gitignore":f(Ce),"src/main.tsx":f(ye),"src/Landing.tsx":f(xe(l)),"src/landing.json":f(`${JSON.stringify(i,null,2)}\n`),"src/analytics.ts":f(Se),"src/vite-env.d.ts":f(`/// <reference types="vite/client" />
`),"src/landing/LandingView.tsx":f(se),"src/landing/Text.tsx":f(ce),"src/landing/context.ts":f(oe),"src/landing/art.ts":f(ae),"src/model/landing.ts":f(le),"src/styles/tokens.css":f(s),"src/styles/base.css":f(be),"src/styles/landing.css":f(o),"static/index.html":f(d)};for(let[e,t]of u)p[`src/assets/${e}.webp`]=[t,{level:0}];return Z({[c]:p})}async function De(e){let t=await Ee(e),n=URL.createObjectURL(new Blob([t],{type:`application/zip`})),r=document.createElement(`a`);r.href=n,r.download=i(e),document.body.append(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}export{De as downloadHandoff};