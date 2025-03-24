// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import { Document } from '../protocol/document.js';
import { Float } from '../protocol/float.js';
import { Integer } from '../protocol/integer.js';
import { List } from '../protocol/list.js';
import { Null } from '../protocol/null.js';
import { String } from '../protocol/string.js';


export enum Value {
  NONE = 0,
  Null = 1,
  String = 2,
  Integer = 3,
  Float = 4,
  List = 5,
  Document = 6
}

export function unionToValue(
  type: Value,
  accessor: (obj:Document|Float|Integer|List|Null|String) => Document|Float|Integer|List|Null|String|null
): Document|Float|Integer|List|Null|String|null {
  switch(Value[type]) {
    case 'NONE': return null; 
    case 'Null': return accessor(new Null())! as Null;
    case 'String': return accessor(new String())! as String;
    case 'Integer': return accessor(new Integer())! as Integer;
    case 'Float': return accessor(new Float())! as Float;
    case 'List': return accessor(new List())! as List;
    case 'Document': return accessor(new Document())! as Document;
    default: return null;
  }
}

export function unionListToValue(
  type: Value, 
  accessor: (index: number, obj:Document|Float|Integer|List|Null|String) => Document|Float|Integer|List|Null|String|null, 
  index: number
): Document|Float|Integer|List|Null|String|null {
  switch(Value[type]) {
    case 'NONE': return null; 
    case 'Null': return accessor(index, new Null())! as Null;
    case 'String': return accessor(index, new String())! as String;
    case 'Integer': return accessor(index, new Integer())! as Integer;
    case 'Float': return accessor(index, new Float())! as Float;
    case 'List': return accessor(index, new List())! as List;
    case 'Document': return accessor(index, new Document())! as Document;
    default: return null;
  }
}
