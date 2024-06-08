((name) => {
  globalThis.A               = globalThis.A               || {};
  globalThis.A._Mathematics_ = globalThis.A._Mathematics_ || {};
  /************************************************/
  globalThis.A._Mathematics_._Parity_ = class $
  {
    #_name_ = name;
    /************************************************/
    static _IsEven_()
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
    static _IsOdd_()
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