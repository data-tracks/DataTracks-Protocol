// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { ValueWrapper } from '../protocol/value-wrapper.js';


export class Values {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Values {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsValues(bb:flatbuffers.ByteBuffer, obj?:Values):Values {
  return (obj || new Values()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsValues(bb:flatbuffers.ByteBuffer, obj?:Values):Values {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Values()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

values(index: number, obj?:ValueWrapper):ValueWrapper|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new ValueWrapper()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

valuesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startValues(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addValues(builder:flatbuffers.Builder, valuesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, valuesOffset, 0);
}

static createValuesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startValuesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endValues(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createValues(builder:flatbuffers.Builder, valuesOffset:flatbuffers.Offset):flatbuffers.Offset {
  Values.startValues(builder);
  Values.addValues(builder, valuesOffset);
  return Values.endValues(builder);
}
}
