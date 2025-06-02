import React from 'react';

const FilterSection = ({ 
  selectedGender, 
  selectedStyle, 
  selectedMetals, 
  onGenderChange, 
  onStyleChange, 
  onMetalSelect, 
  onSelectAllMetals, 
  onResetMetals 
}) => {
  // Women's setting styles
  const womenSettingStyles = [
    { id: 'PAVE', name: 'PAVE', icon: '○○○○○○○' },
    { id: 'CURVED', name: 'CURVED', icon: '～～～～～' },
    { id: 'ACCENTS', name: 'ACCENTS', icon: '◇◇◇◇◇' },
    { id: 'PLAIN', name: 'PLAIN', icon: '――――――' },
    { id: 'OPEN', name: 'OPEN', icon: '∪ ∪' }
  ];

  // Men's setting styles
  const menSettingStyles = [
    { id: 'CLASSIC', name: 'CLASSIC', icon: '▬▬▬▬▬' },
    { id: 'MULTI_COLOURED', name: 'MULTI-COLOURED', icon: '▓▒░▒▓' },
    { id: 'UNIQUE', name: 'UNIQUE', icon: '◊◊◊◊◊' }
  ];

  // Women's metal types
  const womenMetalTypes = [
    { id: 'PLATINUM', name: 'PLATINUM', color: 'bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400' },
    { id: '18K_YELLOW_GOLD', name: '18K YELLOW GOLD', color: 'bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400' },
    { id: '18K_ROSE_GOLD', name: '18K ROSE GOLD', color: 'bg-gradient-to-br from-rose-200 via-rose-300 to-rose-400' },
    { id: '18K_WHITE_GOLD', name: '18K WHITE GOLD', color: 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300' }
  ];

  // Men's metal types
  const menMetalTypes = [
    { id: 'PLATINUM', name: 'Platinum', color: 'bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400' },
    { id: 'YELLOW_GOLD', name: 'Yellow Gold', color: 'bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400' },
    { id: 'ROSE_GOLD', name: 'Rose Gold', color: 'bg-gradient-to-br from-rose-200 via-rose-300 to-rose-400' },
    { id: 'WHITE_GOLD', name: 'White Gold', color: 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300' },
    { id: 'TITANIUM', name: 'Titanium', color: 'bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500' },
    { id: 'TANTALUM', name: 'Tantalum', color: 'bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800' },
    { id: 'CARBON_FIBRE', name: 'Carbon Fibre', color: 'bg-gradient-to-br from-black via-gray-900 to-black' }
  ];

  // Get current options based on selected gender
  const currentSettingStyles = selectedGender === 'WOMEN' ? womenSettingStyles : menSettingStyles;
  const currentMetalTypes = selectedGender === 'WOMEN' ? womenMetalTypes : menMetalTypes;

  return (
    <>
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      <div className="bg-white py-12 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          {/* Description */}
          <div className="text-center mb-8">
            <p className="text-gray-700 text-sm max-w-2xl mx-auto">
              Choose from our range of {selectedGender === 'WOMEN' ? "women's" : "men's"} lab grown diamond wedding rings. Pick the perfect pairing for your engagement ring now.
            </p>
            <div className="w-16 h-px bg-gray-400 mx-auto mt-4"></div>
          </div>

          {/* Gender Toggle */}
          <div className="flex justify-center mb-12 w-full max-w-xl mx-auto">
            <div className="flex border w-full border-gray-900 rounded overflow-hidden">
              <button 
                className={`px-12 py-3 w-1/2 cursor-pointer font-semibold text-xs transition-colors ${
                  selectedGender === 'WOMEN' 
                    ? 'bg-green-700 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => onGenderChange('WOMEN')}
              >
                WOMEN
              </button>
              <button 
                className={`px-12 py-3 w-1/2 cursor-pointer font-semibold text-xs transition-colors ${
                  selectedGender === 'MEN' 
                    ? 'bg-green-700 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => onGenderChange('MEN')}
              >
                MEN
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
            {/* Setting Style */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-xs font-medium text-gray-700 uppercase tracking-wide">SETTING STYLE</h3>
                <span className="text-gray-400 text-xs">?</span>
              </div>
              
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 pb-2 justify-start md:justify-around" style={{ width: '100%' }}>
                  {currentSettingStyles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => onStyleChange(style.id)}
                      className={`flex flex-col items-center p-3 border-2 rounded-lg transition-all flex-shrink-0 ${
                        selectedStyle === style.id 
                          ? 'border-gray-800 bg-gray-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="w-16 h-8 flex items-center justify-center text-gray-600 text-xs mb-1">
                        {style.icon}
                      </div>
                      <span className="text-xs text-gray-700 font-medium text-center whitespace-nowrap">{style.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Metal Type */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-xs font-medium text-gray-700 uppercase tracking-wide">
                  METAL {selectedGender === 'MEN' ? 'TYPES' : 'TYPE'}
                </h3>
                <span className="text-gray-400 text-xs">?</span>
                {selectedGender === 'MEN' && (
                  <>
                    <button 
                      className="ml-auto text-[10px] cursor-pointer text-gray-900 underline hover:text-gray-700 transition-colors"
                      onClick={onSelectAllMetals}
                    >
                      SELECT ALL
                    </button>
                    <button 
                      className="text-[10px] text-gray-900 cursor-pointer underline hover:text-gray-700 transition-colors"
                      onClick={onResetMetals}
                    >
                      RESET
                    </button>
                  </>
                )}
                {selectedGender === 'WOMEN' && (
                  <button className="ml-auto text-xs text-gray-500 underline">SHOW ALL</button>
                )}
              </div>
              
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 pb-2" style={{ width: 'max-content' }}>
                  {currentMetalTypes.map((metal) => (
                    <button
                      key={metal.id}
                      onClick={() => onMetalSelect(metal.id)}
                      className={`flex flex-col items-center p-3 border-2 rounded-lg transition-all flex-shrink-0 ${
                        selectedMetals.includes(metal.id)
                          ? 'border-gray-800 bg-gray-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full ${metal.color} mb-2`}></div>
                      <span className="text-xs text-gray-700 font-medium text-center leading-tight whitespace-nowrap">
                        {metal.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSection;