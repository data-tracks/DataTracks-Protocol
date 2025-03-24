// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import { CreatePlan } from '../protocol/create-plan.js';


export enum CreateType {
  NONE = 0,
  CreatePlan = 1
}

export function unionToCreateType(
  type: CreateType,
  accessor: (obj:CreatePlan) => CreatePlan|null
): CreatePlan|null {
  switch(CreateType[type]) {
    case 'NONE': return null; 
    case 'CreatePlan': return accessor(new CreatePlan())! as CreatePlan;
    default: return null;
  }
}

export function unionListToCreateType(
  type: CreateType, 
  accessor: (index: number, obj:CreatePlan) => CreatePlan|null, 
  index: number
): CreatePlan|null {
  switch(CreateType[type]) {
    case 'NONE': return null; 
    case 'CreatePlan': return accessor(index, new CreatePlan())! as CreatePlan;
    default: return null;
  }
}
