((name) => {
  globalThis.A               = globalThis.A               || {};
  globalThis.A._Mathematics_ = globalThis.A._Mathematics_ || {};
  /************************************************/
  globalThis.A._Mathematics_._Elementary_ = class $
  {
    #_name_ = name;
    /************************************************/
    static Addition()
    {
      let retValue = undefined;
      /************************************************/
      for (let i = 0; i < arguments.length; i++)
      {
        const n = arguments[i];
        /************************************************/
        if (i == 0)
        {
          retValue = n;
        }
        /************************************************/
        if (i != 0)
        {
          retValue += n;
        }
      }
      /************************************************/
      return retValue;
    }
    /************************************************/
    static Subtraction()
    {
      let retValue = undefined;
      /************************************************/
      for (let i = 0; i < arguments.length; i++)
      {
        const n = arguments[i];
        /************************************************/
        if (i == 0)
        {
          retValue = n;
        }
        /************************************************/
        if (i != 0)
        {
          retValue -= n;
        }
      }
      /************************************************/
      return retValue;
    }
    /************************************************/
    static Multiplication()
    {
      let retValue = undefined;
      /************************************************/
      for (let i = 0; i < arguments.length; i++)
      {
        const n = arguments[i];
        /************************************************/
        if (i == 0)
        {
          retValue = n;
        }
        /************************************************/
        if (i != 0)
        {
          retValue *= n;
        }
      }
      /************************************************/
      return retValue;
    }
    /************************************************/
    static Division()
    {
      let retValue = undefined;
      /************************************************/
      for (let i = 0; i < arguments.length; i++)
      {
        const n = arguments[i];
        /************************************************/
        if (i == 0)
        {
          retValue = n;
        }
        /************************************************/
        if (i != 0)
        {
          retValue /= n;
        }
      }
      /************************************************/
      return retValue;
    }
  }
})('Mathematics-Elementary');