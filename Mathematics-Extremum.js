((name) => {
  globalThis.A             = globalThis.A             || {};
  globalThis.A.Mathematics = globalThis.A.Mathematics || {};
  /************************************************/
  globalThis.A.Mathematics.Extremum = class $
  {
    #__name__ = name;
    /************************************************/
    static Maximum()
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
        if (i >= 0)
        {
          retValue = (n > retValue) ? n : retValue; 
        }
      }
      /************************************************/
      return retValue;
    }
    /************************************************/
    static Minimum()
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
        if (i >= 0)
        {
          retValue = (n < retValue) ? n : retValue; 
        }
      }
      /************************************************/
      return retValue;
    }
  }
})('Mathematics-Extremum');