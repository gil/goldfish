// List extracted from: http://html5doctor.com/element-index/
Goldfish.addList({
	"name": "HTML5",
	"groups": [
		{
			"name": "A",
			"entries": [
				{
					"name": "a",
					"description": "If the a element has an <code>href</code> attribute, then it represents a <code>hyperlink</code> (a <code>hypertext</code> anchor). If the a element has no <code>href</code> attribute, then the element represents a placeholder for where a link might otherwise have been placed, if it had been relevant. The <code>target</code>, <code>rel</code>, <code>media</code>, <code>hreflang</code>, and <code>type</code> attributes must be omitted if the <code>href</code> attribute is not present.",
					"url": "http://html5doctor.com/element-index/#a"
				},
				{
					"name": "abbr",
					"description": "Represents an abbreviation or acronym. The optional <code>title</code> attribute may be used to provide an expansion of the abbreviation. If specified, the title attribute must contain an expansion of the abbreviation and nothing else.",
					"url": "http://html5doctor.com/element-index/#abbr"
				},
				{
					"name": "address",
					"description": "Represents the contact information for its enclosing section. If it is a child of the <code>body</code> element, then it applies to the document as a whole.",
					"url": "http://html5doctor.com/element-index/#address"
				},
				{
					"name": "area",
					"description": "The <code>area</code> element represents either a <code>hyperlink</code> with some text and a corresponding area on an image map, or a dead area on an image map. If the area element has no <code>href</code> attribute, then the area represented by the element cannot be selected, and the <code>alt</code> attribute must be omitted.",
					"url": "http://html5doctor.com/element-index/#area"
				},
				{
					"name": "article",
					"description": "Represents a section of a page that consists of a composition that forms an independent part of a document, page, or site. This could be a forum post, a magazine or newspaper article, a Web log entry, a user-submitted comment, or any other independent item of content.",
					"url": "http://html5doctor.com/element-index/#article"
				},
				{
					"name": "aside",
					"description": "Represents a section of a page consisting of content that is tangentially related to the content around the <code>aside</code> element, and which could be considered separate from that content. Such sections are often represented as sidebars in printed typography.",
					"url": "http://html5doctor.com/element-index/#aside"
				},
				{
					"name": "audio",
					"description": "Represents a sound or audio stream. Content may be nested inside the <code>audio</code> element. User agents should not show this content to the user. Authors should use this content to force older browsers to use a legacy audio plugin or to inform the user of how to access the audio content. <strong>Supported audio codecs:</strong> <ul> <li>Chrome 3+ supports <code>.ogg</code> and <code>.wav</code></li> <li>Firefox 3.5+ supports <code>.ogg</code> and <code>.wav</code></li> <li>Opera 10.5+ supports <code>.ogg</code> and <code>.wav</code></li> <li>Safari 4+ supports <code>.mp3</code> and <code>.wav</code></li> </ul>",
					"url": "http://html5doctor.com/element-index/#audio"
				}
			]
		},
		{
			"name": "B",
			"entries": [
				{
					"name": "b",
					"description": "Represents a span of text to be stylistically offset from the normal prose without conveying any extra importance. Examples are key words in a document abstract, product names in a review, or other spans of text whose typical typographic presentation is bold. The <code>b</code> element should be used as a last resort when no other element is more appropriate. In particular, headings should use the <code>h1</code> to <code>h6</code> elements, stress emphasis should use the em element, importance should be denoted with the strong element, and text marked or highlighted should use the mark element.",
					"url": "http://html5doctor.com/element-index/#b"
				},
				{
					"name": "base",
					"description": "The <code>base</code> element allows authors to specify the document base URL for the purposes of resolving relative URLs, and the name of the default browsing context for the purposes of following hyperlinks. The element does not represent any content beyond this information. There must be no more than one <code>base</code> element per document. A <code>base</code> element must have either an <code>href</code> attribute, a <code>target</code> attribute, or both.",
					"url": "http://html5doctor.com/element-index/#base"
				},
				{
					"name": "bdi",
					"description": "The <code>bdi</code> element represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting.",
					"url": "http://html5doctor.com/element-index/#bdi"
				},
				{
					"name": "bdo",
					"description": "The <code>bdo</code> element represents explicit text directionality formatting control for its children. It allows authors to override the Unicode bidirectional algorithm by explicitly specifying a direction override.",
					"url": "http://html5doctor.com/element-index/#bdo"
				},
				{
					"name": "blockquote",
					"description": "The <code>blockquote</code> element represents a section that is quoted from another source. Content inside a <code>blockquote</code> must be quoted from another source, whose address, if it has one, may be cited in the cite attribute.",
					"url": "http://html5doctor.com/element-index/#blockquote"
				},
				{
					"name": "body",
					"description": "The <code>body</code> element represents the main content of the document.",
					"url": "http://html5doctor.com/element-index/#body"
				},
				{
					"name": "br",
					"description": "The <code>br</code> element represents a line break. <code>br</code> elements must be used only for line breaks that are actually part of the content, as in poems or addresses. <code>br</code> elements must not be used for separating thematic groups in a paragraph.",
					"url": "http://html5doctor.com/element-index/#br"
				},
				{
					"name": "button",
					"description": "The <code>button</code> element represents a button. If the element is not disabled, then the user agent should allow the user to activate the button.",
					"url": "http://html5doctor.com/element-index/#button"
				}
			]
		},
		{
			"name": "C",
			"entries": [
				{
					"name": "canvas",
					"description": "Represents a resolution-dependent bitmap canvas, which can be used for rendering graphs, game graphics, or other visual images on the fly. Authors should not use the <code>canvas</code> element in a document when a more suitable element is available. For example, it is inappropriate to use a <code>canvas</code> element to render a page heading. If the desired presentation of the heading is graphically intense, it should be marked up using appropriate elements (typically <code>h1</code>) and then styled using <code>CSS</code> and supporting technologies such as <code>XBL</code>. When authors use the <code>canvas</code> element, they must also provide content that, when presented to the user, conveys essentially the same function or purpose as the bitmap canvas. This content should be nested within the canvas element as a fallback.",
					"url": "http://html5doctor.com/element-index/#canvas"
				},
				{
					"name": "caption",
					"description": "The <code>caption</code> element represents the title of the <code>table</code> that is its parent, if it has a parent and that is a table element.When a <code>table</code> element is the only content in a <code>figure</code> element other than the <code>figcaption</code>, the <code>caption</code> element should be omitted in favor of the <code>figcaption</code>.",
					"url": "http://html5doctor.com/element-index/#caption"
				},
				{
					"name": "cite",
					"description": "The <code>cite</code> element represents the title of a work (e.g. a book, a paper, an essay, a poem, a score, a song, a script, a film, a TV show, a game, a sculpture, a painting, a theatre production, a play, an opera, a musical, an exhibition, a legal case report, etc). This can be a work that is being quoted or referenced in detail (i.e. a citation), or it can just be a work that is mentioned in passing. A person's name is not the title of a work — even if people call that person a piece of work — and the element must therefore not be used to mark up people's names. (In some cases, the b element might be appropriate for names; e.g. in a gossip article where the names of famous people are keywords rendered with a different style to draw attention to them. In other cases, if an element is really needed, the span element can be used.)",
					"url": "http://html5doctor.com/element-index/#cite"
				},
				{
					"name": "code",
					"description": "The <code>code</code> element represents a fragment of computer code. This could be an <code>XML</code> element name, a filename, a computer program, or any other string that a computer would recognize.",
					"url": "http://html5doctor.com/element-index/#code"
				},
				{
					"name": "col",
					"description": "If a <code>col</code> element has a parent and that is a <code>colgroup</code> element that itself has a parent that is a <code>table</code> element, then the <code>col</code> element represents one or more columns in the column group represented by that <code>colgroup</code>.",
					"url": "http://html5doctor.com/element-index/#col"
				},
				{
					"name": "colgroup",
					"description": "The <code>colgroup</code> element represents a group of one or more columns in the table that is its parent, if it has a parent and that is a <code>table</code> element. If the <code>colgroup</code> element contains no col elements, then the element may have a <code>span</code> content attribute specified, whose value must be a valid non-negative integer greater than zero.",
					"url": "http://html5doctor.com/element-index/#colgroup"
				},
				{
					"name": "command",
					"description": "The <code>command</code> element represents a command that the user can invoke. A command can be part of a context menu or toolbar, using the <code>menu</code> element, or can be put anywhere else in the page, to define a keyboard shortcut.",
					"url": "http://html5doctor.com/element-index/#command"
				}
			]
		},
		{
			"name": "D",
			"entries": [
				{
					"name": "datalist",
					"description": "The <code>datalist</code> element represents a set of option elements that represent predefined options for other controls. The contents of the element represents fallback content for legacy user agents, intermixed with <code>option</code> elements that represent the predefined options. In the rendering, the <code>datalist</code> element represents nothing and it, along with its children, should be hidden. The <code>datalist</code> element is hooked up to an <code>input</code> element using the list attribute on the <code>input</code> element.",
					"url": "http://html5doctor.com/element-index/#datalist"
				},
				{
					"name": "dd",
					"description": "The <code>dd</code> element represents the description, definition, or value, part of a term-description group in a description list (<code>dl</code> element).",
					"url": "http://html5doctor.com/element-index/#dd"
				},
				{
					"name": "del",
					"description": "The <code>del</code> element represents a removal from the document. Thedel elements should not cross implied paragraph boundaries",
					"url": "http://html5doctor.com/element-index/#del"
				},
				{
					"name": "details",
					"description": "The <code>details</code> element represents a disclosure widget from which the user can obtain additional information or controls. However, the <code>details</code> element is not appropriate for footnotes.",
					"url": "http://html5doctor.com/element-index/#details"
				},
				{
					"name": "dfn",
					"description": "The <code>dfn</code> element represents the defining instance of a term. The paragraph, description list group, or section that is the nearest ancestor of the <code>dfn</code> element must also contain the definition(s) for the term given by the <code>dfn</code> element.",
					"url": "http://html5doctor.com/element-index/#dfn"
				},
				{
					"name": "div",
					"description": "The <code>div</code> element has no special meaning at all. It represents its children. It can be used with the <code>class</code>, <code>lang</code>, and <code>title</code> attributes to mark up semantics common to a group of consecutive elements.",
					"url": "http://html5doctor.com/element-index/#div"
				},
				{
					"name": "dl",
					"description": "Represents a description list consisting of zero or more name-value groups. Each group must consist of one or more names (<code>dt</code> elements) each followed by one or more values (<code>dd</code> elements). Name-value groups may be terms and definitions, <code>metadata</code> topics and values, or any other groups of name-value data. The values within a group are alternatives; multiple paragraphs forming part of the same value must all be given within the same <code>dd</code> element.",
					"url": "http://html5doctor.com/element-index/#dl"
				},
				{
					"name": "dt",
					"description": "The <code>dt</code> element represents the term, or name, part of a term-description group in a description list (<code>dl</code> element).",
					"url": "http://html5doctor.com/element-index/#dt"
				},
				{
					"name": "doctype",
					"description": "A <code>DOCTYPE</code> is a required preamble and must consist of the following characters, in this order: <ol> <li>A string that is an ASCII case-insensitive match for the string \"&lt;!DOCTYPE\".</li> <li>One or more space characters.</li> <li>A string that is an ASCII case-insensitive match for the string \"<code>html</code>\".</li> <li>Optionally, a <code>DOCTYPE</code> legacy string or an obsolete permitted <code>DOCTYPE</code> string (defined below).</li> <li>Zero or more space characters.</li> <li>A U+003E GREATER-THAN SIGN character (&gt;).</li> </ol>",
					"url": "http://html5doctor.com/element-index/#doctype"
				}
			]
		},
		{
			"name": "E",
			"entries": [
				{
					"name": "em",
					"description": "Represents stress emphasis of its contents. The level of emphasis that a particular piece of content has is given by its number of ancestor <code>em</code> elements. The 'stress' being referred to is linguistic. If spoken, this stress would be emphasised pronunciation on a word that can change the nuance of a sentence.",
					"url": "http://html5doctor.com/element-index/#em"
				},
				{
					"name": "embed",
					"description": "Represents an integration point for an external(typically non-<code>HTML</code>) application or interactive content. The optional <code>src</code> attribute specifies the URL of the resource being embedded. The optional type attribute specifies the <code>MIME</code> type of the plugin to instantiate. The value must be a valid <code>MIME</code> type, optionally with parameters. If both the type attribute and the src attribute are present, then the type attribute must specify the same MIME type as the explicit Content-Type metadata of the resource given by the src attribute.",
					"url": "http://html5doctor.com/element-index/#embed"
				}
			]
		},
		{
			"name": "F",
			"entries": [
				{
					"name": "fieldset",
					"description": "The <code>fieldset</code> element is expected to establish a new block formatting context. If the <code>fieldset</code> element has a child that matches the conditions in the list below, then the first such child is the fieldset element's rendered legend: <ul> <li>The child is a <code>legend</code> element.</li> <li>The child is not out-of-flow (e.g. not absolutely positioned or floated).</li> <li>The child is generating a box (e.g. it is not '<code>display:none</code>').</li> </ul>",
					"url": "http://html5doctor.com/element-index/#fieldset"
				},
				{
					"name": "figcaption",
					"description": "The <code>figcaption</code> element represents a <code>caption</code> or <code>legend</code> for the rest of the contents of the <code>figcaption</code> element's parent <code>figure</code> element, if any.",
					"url": "http://html5doctor.com/element-index/#figcaption"
				},
				{
					"name": "figure",
					"description": "The <code>figure</code> element represents some flow content, optionally with a <code>caption</code>, that is self-contained and is typically referenced as a single unit from the main flow of the document. The figure element can be used to annotate illustrations, diagrams, photos, code listings, etc., that are referenced in the main content of the document, but that could, without affecting the flow of the document, be moved away from that primary content — e.g., to the side of the page, to dedicated pages, or to an appendix.",
					"url": "http://html5doctor.com/element-index/#figure"
				},
				{
					"name": "footer",
					"description": "Represents the \"<code>footer</code>\" of a document or section of a document. The <code>footer</code> element typically contains <code>metadata</code> about its enclosing section, such as who wrote it, links to related documents, copyright data, etc. Contact information for the section given in a footer should be marked up using the <code>address</code> element.",
					"url": "http://html5doctor.com/element-index/#footer"
				},
				{
					"name": "form",
					"description": "The <code>form</code> element represents a collection of form-associated elements, some of which can represent editable values that can be submitted to a server for processing.",
					"url": "http://html5doctor.com/element-index/#form2"
				}
			]
		},
		{
			"name": "H",
			"entries": [
				{
					"name": "h1-h6",
					"description": "Represent headings and subheadings. These elements rank in importance according to the number in their name. The <code>h1</code> element is said to have the highest rank, the <code>h6</code> element has the lowest rank, and two elements with the same name have equal rank.",
					"url": "http://html5doctor.com/element-index/#h1"
				},
				{
					"name": "head",
					"description": "The <code>head</code> element represents a collection of <code>metadata</code> for the Document.",
					"url": "http://html5doctor.com/element-index/#head"
				},
				{
					"name": "header",
					"description": "Represents the \"<code>header</code>\" of a document or section of a document. The header element is typically used to group a set of <code>h1</code>–<code>h6</code> elements to mark up a page's title with its subtitle or tagline. <code>header</code> elements may, however, contain more than just the section's headings and subheadings — e.g., version history information or publication date.",
					"url": "http://html5doctor.com/element-index/#header"
				},
				{
					"name": "hgroup",
					"description": "Represents the heading of a section. The <code>hgroup</code> element is used to group a set of <code>h1</code>–<code>h6</code> elements when the heading has multiple levels, such as subheadings, alternative titles, or taglines.",
					"url": "http://html5doctor.com/element-index/#hgroup"
				},
				{
					"name": "hr",
					"description": "Represents a paragraph-level thematic break. The \"paragraph-level\" bit means between blocks of text, so it can't be used to separate sections of a site. Instead, <code>hr</code> now separates different topics within a section of prose, or between scenes in a novel.",
					"url": "http://html5doctor.com/element-index/#hr"
				},
				{
					"name": "html",
					"description": "The <code>html</code> element represents the root of an <code>HTML</code> document.",
					"url": "http://html5doctor.com/element-index/#html"
				}
			]
		},
		{
			"name": "I",
			"entries": [
				{
					"name": "i",
					"description": "Represents a span of text in an alternate voice or mood, or otherwise offset from the normal prose, such as a taxonomic designation, a technical term, an idiomatic phrase from another language, a thought, a ship name, or some other prose whose typical typographic presentation is italicized. Only use i when nothing more suitable is available — e.g., <code>em</code> for text with stress emphasis, <code>strong</code> for text with semantic importance, <code>cite</code> for titles in a citation or bibliography, <code>dfn</code> for defining a word, and <code>var</code> for mathematical variables.",
					"url": "http://html5doctor.com/element-index/#i"
				},
				{
					"name": "iframe",
					"description": "The <code>iframe</code> element represents a nested browsing context. For <code>iframe</code> elements in <code>HTML</code> documents, the attribute, if present, must have a value using the <code>HTML</code> syntax that consists of the following syntactic components, in the given order: <ul> <li>Any number of comments and space characters.</li> <li>Optionally, a <code>DOCTYPE</code>.</li> <li>Any number of comments and space characters.</li> <li>The root element, in the form of an <code>html</code> element.</li> <li>Any number of comments and space characters.</li> </ul>",
					"url": "http://html5doctor.com/element-index/#iframe"
				},
				{
					"name": "img",
					"description": "An <code>img</code> element represents an image. The image given by the <code>src</code> attribute is the embedded content, and the value of the <code>alt</code> attribute is the <code>img</code> element's fallback content. The <code>src</code> attribute must be present, and must contain a valid non-empty URL potentially surrounded by spaces referencing a non-interactive, optionally animated, image resource that is neither paged nor scripted. The <code>img</code> element must not be used as a layout tool. In particular, <code>img</code> elements should not be used to display transparent images, as they rarely convey meaning and rarely add anything useful to the document.",
					"url": "http://html5doctor.com/element-index/#img"
				},
				{
					"name": "input",
					"description": "The <code>input</code> element represents a typed data field, usually with a form control to allow the user to edit the data.",
					"url": "http://html5doctor.com/element-index/#input"
				},
				{
					"name": "ins",
					"description": "The <code>ins</code> element represents an addition to the document. The ins elements should not cross implied paragraph boundaries.",
					"url": "http://html5doctor.com/element-index/#ins"
				}
			]
		},
		{
			"name": "K",
			"entries": [
				{
					"name": "kbd",
					"description": "The <code>kbd</code> element represents user input (typically keyboard input, although it may also be used to represent other input, such as voice commands). When the <code>kbd</code> element is nested inside a samp element, it represents the input as it was echoed by the system. When the <code>kbd</code> element contains a <code>samp</code> element, it represents input based on system output, for example invoking a menu item. When the <code>kbd</code> element is nested inside another <code>kbd</code> element, it represents an actual key or other single unit of input as appropriate for the input mechanism.",
					"url": "http://html5doctor.com/element-index/#kbd"
				},
				{
					"name": "keygen",
					"description": "The <code>keygen</code> element represents a key pair generator control. When the control's form is submitted, the private key is stored in the local keystore, and the public key is packaged and sent to the server.",
					"url": "http://html5doctor.com/element-index/#keygen"
				}
			]
		},
		{
			"name": "L",
			"entries": [
				{
					"name": "label",
					"description": "The <code>label</code> represents a caption in a user interface. The caption can be associated with a specific form control, known as the <code>label</code> element's labeled control, either using for attribute, or by putting the form control inside the <code>label</code> element itself.",
					"url": "http://html5doctor.com/element-index/#label"
				},
				{
					"name": "legend",
					"description": "The <code>legend</code> element represents a caption for the rest of the contents of the <code>legend</code> element's parent fieldset element, if any.",
					"url": "http://html5doctor.com/element-index/#legend"
				},
				{
					"name": "li",
					"description": "The <code>li</code> element represents a list item. If its parent element is an <code>ol</code>, <code>ul</code>, or <code>menu</code> element, then the element is an item of the parent element's list, as defined for those elements. Otherwise, the list item has no defined list-related relationship to any other <code>li</code> element.",
					"url": "http://html5doctor.com/element-index/#li"
				},
				{
					"name": "link",
					"description": "The <code>link</code> element allows authors to link their document to other resources. The destination of the link(s) is given by the <code>href</code> attribute, which must be present and must contain a valid non-empty URL potentially surrounded by spaces. If the <code>href</code> attribute is absent, then the element does not define a link. A link element must have <code>rel</code> attribute.",
					"url": "http://html5doctor.com/element-index/#link"
				}
			]
		},
		{
			"name": "M",
			"entries": [
				{
					"name": "map",
					"description": "The <code>map</code> element, in conjunction with any <code>area</code> element descendants, defines an image map. The element represents its children.",
					"url": "http://html5doctor.com/element-index/#map"
				},
				{
					"name": "mark",
					"description": "Represents a run of text in one document marked or highlighted because of its relevance in another context. When used in a quotation or other block of text referenced in a document, it indicates a highlight that was not present in the original document — e.g., a portion of text in an academic publication that has recently come under additional scrutiny.",
					"url": "http://html5doctor.com/element-index/#mark"
				},
				{
					"name": "menu",
					"description": "The <code>menu</code> element represents a list of commands. If a menu element's type attribute is in the context menu state, then the element represents the commands of a context menu, and the user can only interact with the commands if that context menu is activated. If a <code>menu</code> element's type attribute is in the toolbar state, then the element represents a list of active commands that the user can immediately interact with. If a menu element's type attribute is in the list state, then the element either represents an unordered list of items (each represented by an <code>li</code> element), each of which represents a command that the user can perform or activate, or, if the element has no <code>li</code> element children, flow content describing available commands.",
					"url": "http://html5doctor.com/element-index/#menu"
				},
				{
					"name": "meta",
					"description": "The <code>meta</code> element represents various kinds of metadata that cannot be expressed using the <code>title</code>, <code>base</code>, <code>link</code>, <code>style</code>, and <code>script</code> elements. The <code>meta</code> element can represent document-level metadata with the name attribute, pragma directives with the <code>http-equiv</code> attribute, and the file's character encoding declaration when an <code>HTML</code> document is serialized to string form (e.g. for transmission over the network or for disk storage) with the charset attribute.",
					"url": "http://html5doctor.com/element-index/#meta"
				},
				{
					"name": "meter",
					"description": "When the <code>meter</code> binding applies to a meter element, the element is expected to render as an 'inline-block' box with a 'height' of '1em' and a 'width' of '5em', a 'vertical-align' of '-0.2em', and with its contents depicting a gauge. When the element is wider than it is tall(or square), the depiction is expected to be of a horizontal gauge, with the minimum value on the right if the 'direction' property on this element has a computed value of '<code>rtl</code>', and on the left otherwise. When the element is taller than it is wide, it is expected to depict a vertical gauge, with the minimum value on the bottom.",
					"url": "http://html5doctor.com/element-index/#meter"
				}
			]
		},
		{
			"name": "N",
			"entries": [
				{
					"name": "nav",
					"description": "Represents navigation for a document. The <code>nav</code> element is a section containing links to other documents or to parts within the current document. Not all groups of links on a page need to be in a <code>nav</code> element — only groups of primary navigation links. In particular, it is common for footers to have a list of links to various key parts of a site, but the footer element is more appropriate in such cases.",
					"url": "http://html5doctor.com/element-index/#nav"
				},
				{
					"name": "noscript",
					"description": "The <code>noscript</code> element represents nothing if scripting is enabled, and represents its children if scripting is disabled. It is used to present different markup to user agents that support scripting and those that don't support scripting, by affecting how the document is parsed.",
					"url": "http://html5doctor.com/element-index/#noscript"
				}
			]
		},
		{
			"name": "O",
			"entries": [
				{
					"name": "object",
					"description": "The <code>object</code> element can represent an external resource, which, depending on the type of the resource, will either be treated as an image, as a nested browsing context, or as an external resource to be processed by a plugin.",
					"url": "http://html5doctor.com/element-index/#object"
				},
				{
					"name": "ol",
					"description": "The <code>ol</code> element represents a list of items, where the items have been intentionally ordered, such that changing the order would change the meaning of the list.",
					"url": "http://html5doctor.com/element-index/#ol"
				},
				{
					"name": "optgroup",
					"description": "The <code>optgroup</code> element represents a group of <code>option</code> elements with a common label. The element's group of option elements consists of the option elements that are children of the optgroup element. When showing option elements in select elements, user agents should show the option elements of such groups as being related to each other and separate from other option elements.",
					"url": "http://html5doctor.com/element-index/#optgroup"
				},
				{
					"name": "option",
					"description": "The <code>option</code> element represents an option in a select element or as part of a list of suggestions in a <code>datalist</code> element. In certain circumstances described in the definition of the select element, an option element can be a select element's placeholder label option. A placeholder label option does not represent an actual option, but instead represents a label for the select control.",
					"url": "http://html5doctor.com/element-index/#option"
				},
				{
					"name": "output",
					"description": "Represents the result of a calculation. The optional for attribute allows an explicit relationship to be made between the result of a calculation and the elements representing the values that influenced the calculation. If specified, the for attribute must contain a string consisting of an unordered set of unique, space-separated tokens, each of which must be the ID of an element in the same document.",
					"url": "http://html5doctor.com/element-index/#output"
				}
			]
		},
		{
			"name": "P",
			"entries": [
				{
					"name": "p",
					"description": "The <code>p</code> element represents a paragraph.",
					"url": "http://html5doctor.com/element-index/#p"
				},
				{
					"name": "param",
					"description": "The <code>param</code> element defines parameters for plugins invoked by object elements. It does not represent anything on its own.",
					"url": "http://html5doctor.com/element-index/#param"
				},
				{
					"name": "pre",
					"description": "The <code>pre</code> element represents a block of preformatted text, in which structure is represented by typographic conventions rather than by elements.",
					"url": "http://html5doctor.com/element-index/#pre"
				},
				{
					"name": "progress",
					"description": "Represents the completion progress of a task. Progress may be either indeterminate — meaning it is unclear how much work remains before the task is complete (e.g., the task is waiting for a response from a remote host) — or a numeric value between 0 and a given maximum, explicitly specifying the fraction of work that has so far been completed.",
					"url": "http://html5doctor.com/element-index/#progress"
				}
			]
		},
		{
			"name": "Q",
			"entries": [
				{
					"name": "q",
					"description": "The q element represents some phrasing content quoted from another source.",
					"url": "http://html5doctor.com/element-index/#q"
				}
			]
		},
		{
			"name": "R",
			"entries": [
				{
					"name": "rp",
					"description": "Represents a container for parentheses used to wrap ruby text (<code>&lt;rt&gt;</code>) inside a <code>&lt;ruby&gt;</code> element. These are displayed by browsers which don't support <code>&lt;ruby&gt;</code>, allowing for graceful degradation of ruby content. Browsers which support <code>&lt;ruby&gt;</code> hide <code>&lt;rp&gt;</code> via display:none.",
					"url": "http://html5doctor.com/element-index/#rp"
				},
				{
					"name": "rt",
					"description": "Represents a container for ruby text inside a <code>&lt;ruby&gt;</code> element. <code>&lt;rt&gt;</code> content becomes the small annotations rendered by default above horizontal base text or to the right of vertical base text.",
					"url": "http://html5doctor.com/element-index/#rt"
				},
				{
					"name": "ruby",
					"description": "Represents a container for base text and ruby text — small annotations used for phonetic readings in languages such as Japanese and Chinese. Examples include furigana and zhùyin fúhào (bopomofo).",
					"url": "http://html5doctor.com/element-index/#ruby"
				}
			]
		},
		{
			"name": "S",
			"entries": [
				{
					"name": "s",
					"description": "The <code>s</code> element represents contents that are no longer accurate or no longer relevant.",
					"url": "http://html5doctor.com/element-index/#s"
				},
				{
					"name": "samp",
					"description": "The <code>samp</code> element represents (sample) output from a program or computing system",
					"url": "http://html5doctor.com/element-index/#samp"
				},
				{
					"name": "script",
					"description": "The <code>script</code> element allows authors to include dynamic script and data blocks in their documents. The element does not represent content for the user.",
					"url": "http://html5doctor.com/element-index/#script"
				},
				{
					"name": "section",
					"description": "Represents a generic document or application section. In this context, a <code>section</code> is a thematic grouping of content, typically with a <code>header</code>, possibly with a <code>footer</code>. Examples include chapters in a book, the various tabbed pages in a tabbed dialog box, or the numbered sections of a thesis. A web site's home page could be split into sections for an introduction, news items, contact information.",
					"url": "http://html5doctor.com/element-index/#section"
				},
				{
					"name": "select",
					"description": "The <code>select</code> element represents a control for selecting amongst a set of options.",
					"url": "http://html5doctor.com/element-index/#select"
				},
				{
					"name": "small",
					"description": "Represents side comments such as small print. It is not intended to be presentational. The <code>small</code> element should not be used for extended spans of text such as multiple paragraphs, lists, or sections of text. It is only intended for short runs of text.",
					"url": "http://html5doctor.com/element-index/#small"
				},
				{
					"name": "source",
					"description": "The source element allows authors to specify multiple alternative media resources for media elements. It does not represent anything on its own. The <code>src</code> attribute gives the address of the media resource. The value must be a valid non-empty URL potentially surrounded by spaces. This attribute must be present.",
					"url": "http://html5doctor.com/element-index/#source"
				},
				{
					"name": "span",
					"description": "The <code>span</code> element doesn't mean anything on its own, but can be useful when used together with the global attributes, e.g. class, lang, or dir. It represents its children.",
					"url": "http://html5doctor.com/element-index/#span"
				},
				{
					"name": "strong",
					"description": "Represents strong importance for its contents. Indicate relative importance by nesting strong elements; each <code>strong</code> element increases the importance of its contents. Changing the importance of a piece of text with the strong element does not change the meaning of the sentence.",
					"url": "http://html5doctor.com/element-index/#strong"
				},
				{
					"name": "style",
					"description": "The <code>style</code> element allows authors to embed style information in their documents. The <code>style</code> element is one of several inputs to the styling processing model. The element does not represent content for the user.",
					"url": "http://html5doctor.com/element-index/#style"
				},
				{
					"name": "sub",
					"description": "The <code>sub</code> element can be used inside a <code>var</code> element, for variables that have subscripts.",
					"url": "http://html5doctor.com/element-index/#sub"
				},
				{
					"name": "summary",
					"description": "The <code>summary</code> element represents a <code>summary</code>, <code>caption</code>, or <code>legend</code> for the rest of the contents of the summary element's parent details element, if any.",
					"url": "http://html5doctor.com/element-index/#summary"
				},
				{
					"name": "sup",
					"description": "The <code>sup</code> element represents a <code>superscript</code> and the <code>sub</code> element represents a subscript.",
					"url": "http://html5doctor.com/element-index/#sup"
				}
			]
		},
		{
			"name": "T",
			"entries": [
				{
					"name": "table",
					"description": "The <code>table</code> element represents data with more than one dimension, in the form of a table. Tables must not be used as layout aids.",
					"url": "http://html5doctor.com/element-index/#table"
				},
				{
					"name": "tbody",
					"description": "The <code>tbody</code> element represents a block of rows that consist of a body of data for the parent table element, if the <code>tbody</code> element has a parent and it is a table.",
					"url": "http://html5doctor.com/element-index/#tbody"
				},
				{
					"name": "td",
					"description": "The <code>td</code> element represents a data cell in a table.",
					"url": "http://html5doctor.com/element-index/#td"
				},
				{
					"name": "textarea",
					"description": "The <code>textarea</code> element represents a multiline plain text edit control for the element's raw value. The contents of the control represent the control's default value.",
					"url": "http://html5doctor.com/element-index/#textarea"
				},
				{
					"name": "tfoot",
					"description": "The <code>tfoot</code> element represents the block of rows that consist of the column summaries (footers) for the parent table element, if the <code>tfoot</code> element has a parent and it is a table.",
					"url": "http://html5doctor.com/element-index/#tfoot"
				},
				{
					"name": "th",
					"description": "The <code>th</code> element represents a header cell in a table.",
					"url": "http://html5doctor.com/element-index/#th"
				},
				{
					"name": "thead",
					"description": "The <code>thead</code> element represents the block of rows that consist of the column labels (headers) for the parent table element, if the thead element has a parent and it is a table.",
					"url": "http://html5doctor.com/element-index/#thead"
				},
				{
					"name": "time",
					"description": "Represents a precise date and/or time in the proleptic Gregorian calendar. The time element encodes modern dates and times in a machine-readable way, so that, for example, user agents could offer to add an event to the user's calendar.",
					"url": "http://html5doctor.com/element-index/#time"
				},
				{
					"name": "title",
					"description": "The <code>title</code> element represents the document's title or name. Authors should use titles that identify their documents even when they are used out of context, for example in a user's history or bookmarks, or in search results. The document's title is often different from its first heading, since the first heading does not have to stand alone when taken out of context.",
					"url": "http://html5doctor.com/element-index/#title"
				},
				{
					"name": "tr",
					"description": "The <code>tr</code> element represents a row of cells in a table.",
					"url": "http://html5doctor.com/element-index/#tr"
				},
				{
					"name": "track",
					"description": "The <code>track</code> element allows authors to specify explicit external timed text tracks for media elements. It does not represent anything on its own.",
					"url": "http://html5doctor.com/element-index/#track"
				}
			]
		},
		{
			"name": "U",
			"entries": [
				{
					"name": "u",
					"description": "The <code>u</code> element represents a span of text with an unarticulated, though explicitly rendered, non-textual annotation (when you are annotating something, but not explicitly saying what it is). Examples include indicating misspelt words, labeling proper names in traditional Chinese prose, or indicating a family name when the name’s order is non-western.",
					"url": "http://html5doctor.com/element-index/#u-def"
				},
				{
					"name": "ul",
					"description": "The <code>ul</code> element represents a list of items, where the order of the items is not important — that is, where changing the order would not materially change the meaning of the list.",
					"url": "http://html5doctor.com/element-index/#ul"
				}
			]
		},
		{
			"name": "V",
			"entries": [
				{
					"name": "var",
					"description": "The <code>var</code> element represents a variable. This could be an actual variable in a mathematical expression or programming context, or it could just be a term used as a placeholder in prose.",
					"url": "http://html5doctor.com/element-index/#var"
				},
				{
					"name": "video",
					"description": "Represents a video or movie. Content may be nested inside the <code>video</code> element. User agents should not show this content to the user. Authors should use this content to force older browsers to use a legacy video plugin or to inform the user of how to access the video content.",
					"url": "http://html5doctor.com/element-index/#video"
				}
			]
		},
		{
			"name": "W",
			"entries": [
				{
					"name": "wbr",
					"description": "The <code>wbr</code> element represents a line break opportunity. Any content inside <code>wbr</code> elements must not be considered part of the surrounding text.",
					"url": "http://html5doctor.com/element-index/#wbr"
				}
			]
		}
	]
});