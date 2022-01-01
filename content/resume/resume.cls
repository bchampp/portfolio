\ProvidesClass{resume}[]
\LoadClass[11pt,letterpaper]{article}
\usepackage[parfill]{parskip}
\usepackage{array}
\usepackage{ifthen} 
\pagestyle{empty}

\def \name#1{\def\@name{#1}}
\def \@name {}

\def \address #1{
  \@ifundefined{@addresstwo}{
    \def \@addresstwo {#1}
  }{
  \@ifundefined{@addressthree}{
  \def \@addressthree {#1}
  }{
     \def \@addressone {#1}
  }}
}

\def \printaddress #1{
  \begingroup
    \def \\ {\addressSep\ }
    \centerline{#1}
  \endgroup
  \par
  \addressskip
}

\def \printname {
  \begingroup
    \hfil{\MakeUppercase{\namesize\bf \@name}}\hfil
    \nameskip\break
  \endgroup
}

\let\ori@document=\document
\renewcommand{\document}{
  \ori@document
  \printname 
  \@ifundefined{@addressone}{}{
    \printaddress{\@addressone}}
  \@ifundefined{@addresstwo}{}{
    \printaddress{\@addresstwo}}
     \@ifundefined{@addressthree}{}{
    \printaddress{\@addressthree}}
}

\newenvironment{rSection}[1]{
  \sectionskip
  \MakeUppercase{\bf #1}
  \sectionlineskip
  \hrule % Horizontal line
  \begin{list}{}{ % List for each item in the section
    \setlength{\leftmargin}{1.5em} % Add a margin on the left
  }
  \item[]
}{
  \end{list}
}

\def\namesize{\LARGE} 
\def\addressskip{\smallskip}
\def\sectionlineskip{\medskip} 
\def\nameskip{\bigskip}
\def\sectionskip{\medskip}
