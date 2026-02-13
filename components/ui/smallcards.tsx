import { Soup } from 'lucide-react';

const SmallCard = ({ title, description }) => (
  <div className="bg-white border rounded-xl p-4 shadow-sm">
    <div className="w-7 h-7 mb-2 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
      <Soup size={14} />
    </div>

    {title && <h4 className="font-semibold text-sm mb-1">{title}</h4>}

    <p className="text-sm text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);
const SmallCard2 = ({ title, description }) => (
  <div className="bg-white border rounded-xl p-4 shadow-sm">
    

    {title && <h4 className="font-bold  mb-1">{title}</h4>}

    <p className="text-sm text-[#303030] font-normal opacity-[60%] leading-normal">
      {description}
    </p>
  </div>
);

export {SmallCard, SmallCard2} ;
