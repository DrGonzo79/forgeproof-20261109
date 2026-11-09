import demo from "../data/demo.json";
export type Item={id:string;name:string;maker:string;category:string;value:number;materials:number;receipts:number;stages:number;photos:number;timestamps:boolean;inspection:boolean;story:string};
export type ProofResult={score:number;band:"strong"|"credible"|"thin";checks:{label:string;passed:boolean;detail:string}[];passportId:string;ruleVersion:string};
export const fixtures=demo.fixtures as Item[];
export function assess(item:Item):ProofResult{
  if(!item.name.trim()) throw new Error("Give the piece a name before creating proof.");
  if(item.value<1||item.value>1000000) throw new Error("Declared value must be between $1 and $1,000,000.");
  const r=demo.rules;
  const material=Math.min(item.materials/3,1)*r.materialWeight;
  const receipt=Math.min(item.receipts/3,1)*r.receiptWeight;
  const stage=Math.min(item.stages/r.minimumStages,1)*r.stageWeight;
  const photo=Math.min(item.photos/r.minimumPhotos,1)*r.photoWeight;
  const score=Math.round(material+receipt+stage+photo+(item.timestamps?r.timestampWeight:0)+(item.inspection?r.inspectionWeight:0));
  const checks=[
    {label:"Material trail",passed:item.materials>=3&&item.receipts>=2,detail:`${item.materials} materials · ${item.receipts} supplier receipts`},
    {label:"Making sequence",passed:item.stages>=r.minimumStages,detail:`${item.stages} timestamped stages; target ${r.minimumStages}+`},
    {label:"Visual evidence",passed:item.photos>=r.minimumPhotos,detail:`${item.photos} process photos; target ${r.minimumPhotos}+`},
    {label:"Final inspection",passed:item.inspection,detail:item.inspection?"Maker attestation recorded":"Add maker attestation before publishing"}
  ];
  return {score,band:score>=80?"strong":score>=55?"credible":"thin",checks,passportId:`FP-${item.category.slice(0,2).toUpperCase()}-${item.id.toUpperCase()}-026`,ruleVersion:r.version};
}
