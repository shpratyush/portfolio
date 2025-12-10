import { useState, useEffect } from 'react';

const codeLines = [
  { content: '<?php', color: 'text-muted-foreground' },
  { content: '', color: '' },
  { content: 'namespace App\\Http\\Controllers;', color: 'text-purple-400' },
  { content: '', color: '' },
  { content: 'class ProjectController extends Controller', color: 'text-yellow-400' },
  { content: '{', color: 'text-foreground' },
  { content: '    public function deliver(Request $request)', color: 'text-blue-400' },
  { content: '    {', color: 'text-foreground' },
  { content: '        // Building solutions that matter', color: 'text-muted-foreground italic' },
  { content: '        $project = Project::create([', color: 'text-foreground' },
  { content: "            'name' => $request->name,", color: 'text-primary' },
  { content: "            'status' => 'delivered',", color: 'text-primary' },
  { content: "            'quality' => 'exceptional'", color: 'text-primary' },
  { content: '        ]);', color: 'text-foreground' },
  { content: '', color: '' },
  { content: '        return response()->json([', color: 'text-foreground' },
  { content: "            'success' => true,", color: 'text-primary' },
  { content: "            'message' => 'Ready to build your vision'", color: 'text-primary' },
  { content: '        ]);', color: 'text-foreground' },
  { content: '    }', color: 'text-foreground' },
  { content: '}', color: 'text-foreground' },
];

const AnimatedCodeEditor = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ line: 0, char: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < codeLines.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      setCursorPosition({ line: visibleLines, char: 0 });
    } else {
      setCursorPosition({ line: codeLines.length - 1, char: codeLines[codeLines.length - 1].content.length });
    }
  }, [visibleLines]);

  return (
    <div className="glass-card overflow-hidden max-w-2xl w-full">
      {/* Editor Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-secondary/50 border-b border-border/50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-muted-foreground font-mono">ProjectController.php</span>
        <div className="w-16" />
      </div>

      {/* Editor Content */}
      <div className="p-4 font-mono text-sm overflow-x-auto">
        <div className="flex">
          {/* Line Numbers */}
          <div className="pr-4 text-right text-muted-foreground/50 select-none border-r border-border/30 mr-4">
            {codeLines.map((_, index) => (
              <div key={index} className="leading-6">
                {index + 1}
              </div>
            ))}
          </div>

          {/* Code Content */}
          <div className="flex-1">
            {codeLines.map((line, index) => (
              <div
                key={index}
                className={`leading-6 transition-all duration-300 ${
                  index < visibleLines ? 'opacity-100' : 'opacity-0'
                } ${line.color}`}
              >
                {line.content || '\u00A0'}
                {index === cursorPosition.line && visibleLines <= codeLines.length && (
                  <span className="inline-block w-2 h-5 bg-primary animate-blink ml-0.5 align-middle" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCodeEditor;
