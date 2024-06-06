((name) => {
  globalThis.A             = globalThis.A             || {};
  globalThis.A.Mathematics = globalThis.A.Mathematics || {};
  /************************************************/
  globalThis.A.Mathematics.Parity = class $
  {
    #__name__ = name;
    /************************************************/
    static IsEven()
    {
      let retValue = false;
      /************************************************/
      const n = arguments[0];
      /************************************************/
      retValue = (n % 2) == 0;
      /************************************************/
      return retValue;
    }
    /************************************************/
    static IsOdd()
    {
      let retValue = false;
      /************************************************/
      const n = arguments[0];
      /************************************************/
      retValue = (n % 2) == 1;
      /************************************************/
      return retValue;
    }
  }
})('Mathematics-Parity');