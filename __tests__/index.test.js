var replaceObjectContent = require('../index');

describe('Replace Object content',()=>{
  it('replaces the contents of source object with the destination object',()=>{
    const original = {
      a:1,
      b:4,
      d:1
    };
    const toCopyFrom = {
      b:2,
      d:5,
      e:6
    };
    const afterReplace = replaceObjectContent(original,toCopyFrom);
    
    expect(original).toEqual(toCopyFrom); //deep equal
    expect(afterReplace).toEqual(toCopyFrom); //deep equal
    expect(afterReplace === original).toEqual(true); //making sure reference is equal
    expect(original === toCopyFrom).toEqual(false); //making sure original and toCopyFrom references are not equal
    expect(afterReplace === toCopyFrom).toEqual(false); //making sure afterReplace and toCopyFrom references are not equal
  });
});
