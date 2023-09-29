
var blocks_color = '#8169DF';

export const TOOLBOX_SPECIAL = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'CATEGORY',
      name: '%{BKY_SPECIAL}',
      colour: blocks_color,
      contents: [
        {
          kind: 'BLOCK',
          type: 'text_nocrlf_print',
          blockxml:
            `<block type="text_nocrlf_print">
               <value name="TEXT">
                 <shadow type="text">
                   <field name="TEXT">abc</field>
                 </shadow>
               </value>
             </block>`,
        }
      ]
    }
  ]
};

