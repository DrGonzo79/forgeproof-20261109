"use client";
import {useEffect,useMemo,useState} from "react";
import {assess,fixtures,type Item,type ProofResult} from "../lib/proof";

export default function Home(){
  const [item,setItem]=useState<Item>({...fixtures[0]});
  const [result,setResult]=useState<ProofResult|null>(null);
  const [loading,setLoading]=useState(false),[error,setError]=useState(""),[passport,setPassport]=useState(false);
  const [hydrated,setHydrated]=useState(false);
  const [ready,setReady]=useState<string[]>([]);
  const completed=useMemo(()=>Math.round(ready.length/3*100),[ready]);
  useEffect(()=>setHydrated(true),[]);
  function reset(next:Item){setItem(next);setResult(null);setError("");setPassport(false);setReady([])}
  function update<K extends keyof Item>(key:K,value:Item[K]){reset({...item,[key]:value})}
  function run(){setLoading(true);setError("");setResult(null);setPassport(false);setReady([]);setTimeout(()=>{try{setResult(assess(item))}catch(e){setError(e instanceof Error?e.message:"Proof analysis failed.")}finally{setLoading(false)}},420)}
  function toggle(id:string){setReady(x=>x.includes(id)?x.filter(v=>v!==id):[...x,id])}
  return <main>
    <header><a href="#top" className="brand"><span>FORGE</span>PROOF</a><nav aria-label="Page"><a href="#bench">Proof bench</a><a href="#method">Method</a></nav><p>DEMO · FICTIONAL ITEMS · NOT AUTHENTICATION</p></header>
    <section className="hero" id="top"><div><p className="kicker">EVIDENCE FROM THE BENCH / PASSPORT 001</p><h1>Show the making.<br/><em>Not just the maker.</em></h1><p className="lede">Turn materials, process stages and inspection notes into a buyer-readable proof packet for one high-value handmade piece.</p><a className="jump" href="#bench">Build a proof packet ↓</a></div><aside><span>PAIN SIGNAL</span><b>7/10</b><p>IdeaBrowser severity score for makers fighting copycats and false bot flags.</p><small>Derived from the Nov. 9 report; evidence remains directional.</small></aside></section>
    <section className="ticker"><span>PROCESS, NOT BLOCKCHAIN</span><span>FIXTURES ARE FICTIONAL</span><span>NO ETSY INTEGRATION</span><span>DETERMINISTIC RULES</span></section>
    <section className="bench" id="bench" aria-labelledby="bench-title">
      <form className="controls" onSubmit={e=>{e.preventDefault();run()}}><p className="kicker">01 / CAPTURE</p><h2 id="bench-title">Bench record</h2><p>Start with a fictional piece, then change the evidence counts.</p>
        <label>Demo piece<select aria-label="Demo piece" value={item.id} onChange={e=>reset({...fixtures.find(x=>x.id===e.target.value)!})}>{fixtures.map(x=><option key={x.id} value={x.id}>{x.name} · {x.category}</option>)}</select></label>
        <label>Piece name<input aria-label="Piece name" value={item.name} onChange={e=>update("name",e.target.value)} maxLength={70}/></label>
        <div className="pair"><label>Declared value ($)<input aria-label="Declared value" type="number" min="1" max="1000000" value={item.value} onChange={e=>update("value",Number(e.target.value))}/></label><label>Process stages<input aria-label="Process stages" type="number" min="0" max="30" value={item.stages} onChange={e=>update("stages",Number(e.target.value))}/></label></div>
        <div className="pair"><label>Materials named<input aria-label="Materials named" type="number" min="0" max="30" value={item.materials} onChange={e=>update("materials",Number(e.target.value))}/></label><label>Supplier receipts<input aria-label="Supplier receipts" type="number" min="0" max="30" value={item.receipts} onChange={e=>update("receipts",Number(e.target.value))}/></label></div>
        <label>Process photos <span>{item.photos}</span><input aria-label="Process photos" type="range" min="0" max="20" value={item.photos} onChange={e=>update("photos",Number(e.target.value))}/></label>
        <div className="checks"><label><input type="checkbox" checked={item.timestamps} onChange={e=>update("timestamps",e.target.checked)}/> Device timestamps retained</label><label><input type="checkbox" checked={item.inspection} onChange={e=>update("inspection",e.target.checked)}/> Final maker inspection signed</label></div>
        <button className="primary" disabled={loading||!hydrated}>{loading?"Reading the evidence…":"Assemble proof packet →"}</button>
      </form>
      <section className="result" aria-live="polite">{error&&<p role="alert" className="error">{error}</p>}{loading&&<div className="empty pulse"><b>···</b><h3>Sequencing the bench trail</h3><p>No AI or network call is made.</p></div>}{!loading&&!result&&<div className="empty"><b>0—100</b><h3>A score is a checklist, not a truth oracle.</h3><p>This demo measures evidence completeness. It cannot prove who physically made an object.</p></div>}{result&&<><div className="score"><div><b>{result.score}</b><span>/100</span></div><div><p>{result.band.toUpperCase()} EVIDENCE</p><h3>{item.name}</h3><small>{result.passportId} · rules {result.ruleVersion}</small></div></div><div className="findings">{result.checks.map(c=><article data-pass={c.passed} key={c.label}><span>{c.passed?"PASS":"GAP"}</span><div><h3>{c.label}</h3><p>{c.detail}</p></div></article>)}</div><button className="passportButton" onClick={()=>setPassport(x=>!x)}>{passport?"Hide buyer view":"Preview buyer passport →"}</button>{passport&&<div className="passport"><div className="passportTop"><span>VERIFIED PROCESS RECORD</span><b>{result.passportId}</b></div><p className="craft">{item.category.toUpperCase()} · FICTIONAL DEMO</p><h2>{item.name}</h2><h3>{item.maker}</h3><p>{item.story}</p><dl><div><dt>Declared value</dt><dd>${item.value.toLocaleString()}</dd></div><div><dt>Evidence</dt><dd>{result.score}/100</dd></div><div><dt>Process</dt><dd>{item.stages} stages</dd></div></dl><small>This record describes submitted evidence. It is not an appraisal, anti-counterfeit guarantee, or proof of legal ownership.</small></div>}<div className="publish"><h3>Publish-readiness gates</h3><div className="progress"><span style={{width:`${completed}%`}}/></div>{[["consent","Maker consents to public record"],["claims","Material claims have evidence"],["serial","Physical tag is assigned"]].map(([id,label])=><label key={id}><input type="checkbox" checked={ready.includes(id)} onChange={()=>toggle(id)}/>{label}</label>)}<p>{ready.length}/3 gates rehearsed · demo state is not saved</p></div></>}</section>
    </section>
    <section className="method" id="method"><p className="kicker">THE NARROW PAID WEDGE</p><h2>Jewelry guild first.<br/>One shared standard.</h2><div><article><b>01</b><h3>Capture</h3><p>Record materials and stage evidence while the piece still sits on the bench.</p></article><article><b>02</b><h3>Review</h3><p>A guild admin checks completeness and claim language, not metaphysical authenticity.</p></article><article><b>03</b><h3>Continue</h3><p>Buyer gets care, repair, transfer and maker-contact history after purchase.</p></article></div></section>
    <footer><div><b>ForgeProof</b><p>A proof-of-work passport prototype.</p></div><p>FastAPI source tested, not deployed.</p><a href="https://www.ideabrowser.com/hub/ideas/today">Source idea ↗</a></footer>
  </main>
}
